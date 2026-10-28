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
  return <SimulatedAudioPlayer trackId={volume.id} className='space-y-6' />;
}
