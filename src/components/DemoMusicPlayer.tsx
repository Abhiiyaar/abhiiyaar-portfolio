"use client";

import { useState, useRef } from "react";
import { Button } from "./ui/Button";
import { useMusic } from "../contexts/MusicContext";

const songs = [
  {
    name: "Levitating",
    artist: "Dua Lipa",
    url: "/Levitating-(SambalpuriStar.In).mp3",
  },
  {
    name: "Parano",
    artist: "Frozy, DDB",
    url: "/Parano - SoundWorldz.mp3",
  },
  {
    name: "Espresso",
    artist: "Sabrina Carpenter",
    url: "/Espresso-(SambalpuriStar.In).mp3",
  },
];

export default function DemoMusicPlayer() {
  const { playSong, currentSong, isPlaying, volume, setVolume } = useMusic();
  const [loading, setLoading] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlaySong = async (song: any) => {
    setLoading(song.name);
    try {
      await playSong(song);
    } catch (error) {
      console.error("Failed to play song:", error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <h2 className="title text-2xl sm:text-3xl">
        🎧 Feeling Bored? Let&apos;s Vibe! 🎶
      </h2>
      <div className="flex flex-wrap gap-2">
        {songs.map((song, index) => (
          <Button
            key={index}
            variant={currentSong?.name === song.name ? "default" : "outline"}
            size="sm"
            onClick={() => handlePlaySong(song)}
            disabled={loading === song.name}
          >
            {loading === song.name
              ? "⏳"
              : currentSong?.name === song.name && isPlaying
                ? "⏸️"
                : "▶️"}{" "}
            {song.name}
          </Button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        🎵 <strong>Real audio playback</strong> - Click any song to play!
      </p>
      {currentSong && (
        <div className="space-y-2 rounded bg-muted/50 p-3 text-xs text-muted-foreground">
          <div>
            Now playing: {currentSong.name} - {currentSong.artist}{" "}
            {isPlaying ? "🎵" : "⏸️"}
          </div>
          <div className="flex items-center gap-2">
            <span>Volume:</span>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setVolume(Math.max(0, volume - 0.1))}
              className="h-6 w-6 p-0"
              title="Volume Down"
              aria-label="Decrease Volume"
            >
              -🔉
            </Button>
            <div className="w-12 text-center">{Math.round(volume * 100)}%</div>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setVolume(Math.min(1, volume + 0.1))}
              className="h-6 w-6 p-0"
              title="Volume Up"
              aria-label="Increase Volume"
            >
              +🔊
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
