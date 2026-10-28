'use client';

import { SimulatedAudioPlayer } from '@/components/shared/simulated-audio-player';

interface BookVolume {
  id: string;
  bookId: string;
  title: string;
  volume: string;
  content: string;
  image: string;
  audioUrl?: string;
}

interface AudiobookPlayerProps {
  volume: BookVolume;
}

export function AudiobookPlayer({ volume }: AudiobookPlayerProps) {
  // A new `key` remounts the player, resetting playback for the new volume.
  return <SimulatedAudioPlayer key={volume.id} className='space-y-6' />;
}
