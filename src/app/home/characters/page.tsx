import CharacterDetails from '@/components/character/character-details';
import PageHeader from '@/components/layout/page-header';
import { CharacterWithExpandedRefs } from '@/components/character/character-card';
import { CharacterCard } from '@/components/character/character-card';
import { CharacterFilterWrapper } from '@/components/character/character-filter-wrapper';
// import { characters } from '@/data/characters';
import { client } from '@/sanity/lib/client';
import { GET_ALL_CHARACTERS } from '@/sanity/lib/queries';

export default async function CharactersPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const { query = '' } = await searchParams

  const characters = await client.fetch(GET_ALL_CHARACTERS) as unknown as CharacterWithExpandedRefs[];

  const character =
    characters.find((character) => character.id === query) || characters[0]

  return (
    <div className='min-h-screen gradient-container'>
      <PageHeader header='Characters' />

      <div className='py-6 container'>
        <CharacterFilterWrapper query={query} />
        <div className='flex lg:flex-row flex-col lg:gap-8 mt-6'>
          <CharacterDetails {...character} />
          <CharacterCard query={query} characters={characters}/>
        </div>
      </div>
    </div>
  )
}
