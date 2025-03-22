import { CharacterFilterWrapper } from '@/components/character/character-filter-wrapper';
import { CharacterGrid } from '@/components/character/character-grid';

export default function CharactersPage() {
  return (
    <div className='min-h-screen gradient-container'>
      <header className='top-0 z-10 pt-6'>
        <div className='flex justify-between items-center h-16 container'>
          <h1 className='font-bold text-4xl tracking-tight'>Characters</h1>
        </div>
      </header>

      <div className='py-6 container'>
        <CharacterFilterWrapper />
        <CharacterGrid />
      </div>
    </div>
  );
}
