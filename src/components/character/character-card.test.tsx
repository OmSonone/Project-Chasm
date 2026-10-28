import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { CharacterWithExpandedRefs } from '@/lib/characters';
import { CharacterCard } from './character-card';

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    'aria-label': ariaLabel,
  }: {
    href: string;
    children?: React.ReactNode;
    'aria-label'?: string;
  }) => (
    <a href={href} aria-label={ariaLabel}>
      {children}
    </a>
  ),
}));

vi.mock('next/image', () => ({
  default: ({ alt }: { alt: string }) => <span role='img' aria-label={alt} />,
}));

vi.mock('@/sanity/lib/image', () => ({
  urlFor: () => ({
    url: () => 'https://cdn.sanity.io/images/test-project/test/image.jpg',
  }),
}));

const auditFields = { _createdAt: '', _updatedAt: '', _rev: '' };

function character(
  id: string,
  elementName: string,
  rarity: number
): CharacterWithExpandedRefs {
  return {
    ...auditFields,
    _id: `character-${id}`,
    _type: 'character',
    id,
    name: id,
    rarity,
    element: {
      ...auditFields,
      _id: `element-${elementName.toLowerCase()}`,
      _type: 'elements',
      id: elementName.toLowerCase(),
      name: elementName,
    },
    weapon: null,
  };
}

const characters = [
  character('raiden-shogun', 'Electro', 5),
  character('kamisato-ayaka', 'Cryo', 5),
  character('xiangling', 'Pyro', 4),
];

describe('CharacterCard', () => {
  it('renders every character when no filter is active', () => {
    render(<CharacterCard characters={characters} query='' />);

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getByText('raiden-shogun')).toBeInTheDocument();
    expect(screen.getByText('xiangling')).toBeInTheDocument();
  });

  it('only renders characters matching an element filter', () => {
    render(<CharacterCard characters={characters} query='filter_pyro' />);

    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getByText('xiangling')).toBeInTheDocument();
    expect(screen.queryByText('raiden-shogun')).not.toBeInTheDocument();
  });

  it('only renders characters matching a rarity filter', () => {
    render(<CharacterCard characters={characters} query='filter_5' />);

    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.queryByText('xiangling')).not.toBeInTheDocument();
  });

  it('explains when a filter matches no characters', () => {
    render(<CharacterCard characters={characters} query='filter_3' />);

    expect(
      screen.getByText('No characters match this filter yet.')
    ).toBeInTheDocument();
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('links each card to its selection query', () => {
    render(<CharacterCard characters={characters} query='' />);

    expect(
      screen.getByRole('link', { name: 'Select raiden-shogun' })
    ).toHaveAttribute('href', '/home/characters?query=raiden-shogun');
  });
});
