import { CharacterFilterWrapper } from '@/components/character/character-filter-wrapper'
import { CharacterCard } from '@/components/character/character-card'
import { characters } from '@/data/characters'
import PageHeader from '@/components/layout/page-header'
import CharacterDetails from '@/components/character/character-details'

export default async function CharactersPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const { query = '' } = await searchParams

  const character =
    characters.find((character) => character.id === query) || characters[0]

  return (
    <div className='min-h-screen gradient-container'>
      <PageHeader header='Characters' />

      <div className='py-6 container'>
        <CharacterFilterWrapper query={query} />
        <div className='flex lg:flex-row flex-col lg:gap-8 mt-6'>
          <CharacterDetails {...character} />
          <CharacterCard query={query} />
        </div>
      </div>
    </div>
  )
}
