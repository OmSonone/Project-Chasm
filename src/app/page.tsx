import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/layout/mode-toggle';

export default function LandingPage() {
  return (
    <div className='relative'>
      <div className='top-4 right-4 z-10 absolute'>
        <ModeToggle />
      </div>
      <div className='flex flex-1 justify-center items-center p-4 md:p-8 min-h-screen gradient-container'>
        <div className='flex md:flex-row flex-col md:justify-between items-center gap-12 container'>
          <div className='space-y-4 md:text-left text-center'>
            <h1 className='font-work-sans font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl sm:leading tracking-tighter-35'>
              <span className='bg-clip-text bg-linear-to-r from-black/60 dark:from-white/60 to-black dark:to-white text-transparent'>
                Project
              </span>
              <br />
              <span className='bg-clip-text bg-linear-to-r from-black dark:from-white to-black/60 dark:to-white/60 text-transparent'>
                Chasm
              </span>
            </h1>
            <p className='max-w-[600px] text-muted-foreground md:text-xl'>
              {
                "Explore the depths of Teyvat's lore through books, characters, artifacts, and more."
              }
            </p>
          </div>
          <div className='flex justify-center md:justify-end'>
            <Link href='/home'>
              <Button
                size='lg'
                className='bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 px-8 h-14 text-white dark:text-black text-lg transition-colors cursor-pointer'
              >
                Open Project Chasm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
