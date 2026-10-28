import { notFound } from 'next/navigation';
import CharacterDetails from '@/components/character/character-details';
import PageHeader from '@/components/layout/page-header';
import { CharacterCard } from '@/components/character/character-card';
import { CharacterFilterWrapper } from '@/components/character/character-filter-wrapper';
import {
  selectCharacter,
  type CharacterWithExpandedRefs,
} from '@/lib/characters';
import { client } from '@/sanity/lib/client';
import { GET_ALL_CHARACTERS } from '@/sanity/lib/queries';

export default async function CharactersPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query = '' } = await searchParams;

  const characters =
    await client.fetch<CharacterWithExpandedRefs[]>(GET_ALL_CHARACTERS);

  const character = selectCharacter(characters, query);

  if (!character) {
    notFound();
  }

  return (
    <div className='min-h-screen gradient-container'>
      <PageHeader header='Characters' />

      <div className='py-6 container'>
        <CharacterFilterWrapper query={query} />
        <div className='flex lg:flex-row flex-col lg:gap-8 mt-6'>
          <CharacterDetails {...character} />
          <CharacterCard query={query} characters={characters} />
        </div>
      </div>
    </div>
  );
}
