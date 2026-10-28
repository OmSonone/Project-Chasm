'use client';

import { SimulatedAudioPlayer } from '@/components/shared/simulated-audio-player';

interface CharacterStory {
  id: string;
  characterId: string;
  title: string;
  summary: string;
  audioUrl?: string;
}

interface CharacterStoryPlayerProps {
  story: CharacterStory;
}

export function CharacterStoryPlayer({ story }: CharacterStoryPlayerProps) {
  return (
    <SimulatedAudioPlayer
      trackId={story.id}
      className='bg-card/50 p-4 border rounded-lg'
    />
  );
}
