import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AudiobookPlayer } from './audiobook-player';

const volume = {
  id: 'the-pale-princess-v1',
  bookId: 'the-pale-princess',
  title: 'The Pale Princess',
  volume: 'Volume 1',
  content: 'Once, there was a glorious kingdom...',
  image: '/static/images/placeholder.svg',
};

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

function setup() {
  return render(<AudiobookPlayer volume={volume} />);
}

describe('AudiobookPlayer', () => {
  it('starts at the beginning of a five minute track', () => {
    setup();

    expect(screen.getByText('0:00')).toBeInTheDocument();
    expect(screen.getByText('5:00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument();
  });

  it('advances the elapsed time while playing', () => {
    setup();

    fireEvent.click(screen.getByRole('button', { name: 'Play' }));

    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText('0:03')).toBeInTheDocument();
  });

  it('stops advancing after pausing', () => {
    setup();

    fireEvent.click(screen.getByRole('button', { name: 'Play' }));
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    fireEvent.click(screen.getByRole('button', { name: 'Pause' }));

    expect(screen.getByText('0:03')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText('0:03')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument();
  });

  it('restarts when a different track is selected', () => {
    const { rerender } = setup();

    fireEvent.click(screen.getByRole('button', { name: 'Play' }));
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    rerender(
      <AudiobookPlayer volume={{ ...volume, id: 'the-pale-princess-v2' }} />
    );

    expect(screen.getByText('0:00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument();
  });

  it('rewinds when the track finishes', () => {
    setup();

    fireEvent.click(screen.getByRole('button', { name: 'Play' }));

    act(() => {
      vi.advanceTimersByTime(5 * 60 * 1000);
    });

    expect(screen.getByText('0:00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument();
  });
});
