import { Button } from '@/components/ui/button';

export function ElementFilter() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button variant='outline' size='sm' className='gap-1'>
        <span className='bg-red-500 rounded-full w-3 h-3'></span>
        <span>Pyro</span>
      </Button>
      <Button variant='outline' size='sm' className='gap-1'>
        <span className='bg-blue-500 rounded-full w-3 h-3'></span>
        <span>Hydro</span>
      </Button>
      <Button variant='outline' size='sm' className='gap-1'>
        <span className='bg-emerald-500 rounded-full w-3 h-3'></span>
        <span>Anemo</span>
      </Button>
      <Button variant='outline' size='sm' className='gap-1'>
        <span className='bg-purple-500 rounded-full w-3 h-3'></span>
        <span>Electro</span>
      </Button>
      <Button variant='outline' size='sm' className='gap-1'>
        <span className='bg-green-500 rounded-full w-3 h-3'></span>
        <span>Dendro</span>
      </Button>
      <Button variant='outline' size='sm' className='gap-1'>
        <span className='bg-cyan-500 rounded-full w-3 h-3'></span>
        <span>Cryo</span>
      </Button>
      <Button variant='outline' size='sm' className='gap-1'>
        <span className='bg-amber-500 rounded-full w-3 h-3'></span>
        <span>Geo</span>
      </Button>
    </div>
  );
}
