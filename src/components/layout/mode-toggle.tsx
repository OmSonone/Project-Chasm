'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label='Toggle theme'
      className='cursor-pointer'
    >
      <Sun className='w-5 h-5 rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all' />
      <Moon className='absolute w-5 h-5 rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all' />
    </Button>
  );
}
