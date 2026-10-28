'use client';

import { useEffect, useState } from 'react';
import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { formatTime } from '@/lib/format';
import { cn } from '@/lib/utils';

/** Placeholder track length used until real audio files are wired up. */
export const SIMULATED_TRACK_DURATION_SECONDS = 5 * 60;

const TICK_MS = 500;
const PROGRESS_STEP = 0.5;

export interface SimulatedAudioPlayerProps {
  className?: string;
}

/**
 * Progress-simulating audio player shared by the book audiobook and the
 * character story players. Swap the interval for an `<audio>` element once
 * real media is available.
 *
 * Give the player a `key` per track (see the wrappers) so switching tracks
 * resets playback state.
 */
export function SimulatedAudioPlayer({ className }: SimulatedAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);

  const isFinished = progress >= 100;
  const isActivelyPlaying = isPlaying && !isFinished;

  useEffect(() => {
    if (!isActivelyPlaying) return;

    const interval = setInterval(() => {
      setProgress((previous) => Math.min(previous + PROGRESS_STEP, 100));
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [isActivelyPlaying]);

  const togglePlayback = () => {
    if (isActivelyPlaying) {
      setIsPlaying(false);
      return;
    }

    if (isFinished) setProgress(0);
    setIsPlaying(true);
  };

  const currentTime = formatTime(
    (progress / 100) * SIMULATED_TRACK_DURATION_SECONDS
  );
  const duration = formatTime(SIMULATED_TRACK_DURATION_SECONDS);

  return (
    <div className={cn('space-y-4', className)}>
      <div className='space-y-2'>
        <div className='flex justify-between items-center'>
          <span className='text-muted-foreground text-sm'>{currentTime}</span>
          <span className='text-muted-foreground text-sm'>{duration}</span>
        </div>
        <Slider
          value={[progress]}
          max={100}
          step={0.1}
          aria-label='Playback position'
          onValueChange={(value) => setProgress(value[0])}
        />
      </div>

      <div className='flex justify-center items-center gap-4'>
        <Button variant='ghost' size='icon' className='w-8 h-8'>
          <SkipBack className='w-4 h-4' />
          <span className='sr-only'>Skip back 15 seconds</span>
        </Button>
        <Button
          variant='outline'
          size='icon'
          className='rounded-full w-12 h-12'
          onClick={togglePlayback}
        >
          {isActivelyPlaying ? (
            <Pause className='w-6 h-6' />
          ) : (
            <Play className='pl-1 w-6 h-6' />
          )}
          <span className='sr-only'>
            {isActivelyPlaying ? 'Pause' : 'Play'}
          </span>
        </Button>
        <Button variant='ghost' size='icon' className='w-8 h-8'>
          <SkipForward className='w-4 h-4' />
          <span className='sr-only'>Skip forward 15 seconds</span>
        </Button>
      </div>

      <div className='flex items-center gap-2'>
        <Volume2 className='w-4 h-4 text-muted-foreground' />
        <Slider
          value={[volume]}
          max={100}
          step={1}
          className='flex-1'
          aria-label='Volume'
          onValueChange={(value) => setVolume(value[0])}
        />
      </div>
    </div>
  );
}
