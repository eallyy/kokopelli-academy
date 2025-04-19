'use client'
import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';
import '@/styles/videojs-custom.css';

// Video.js Plugins
import 'videojs-quality-selector-hls';

type Props = {
  src: string
  poster?: string
  subtitles?: { label: string; src: string; srclang: string; default?: boolean }[]
  audioTracks?: { label: string; src: string }[] // opsiyonel
  watermarkText?: string
}

export default function VideoPlayer({
  src,
  poster,
  subtitles = [],
  watermarkText,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = useRef<Player | null>(null)

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        responsive: true,
        fluid: true,
        poster,
        sources: [{ src, type: 'application/x-mpegURL' }],
        controlBar: {
            children: [
              'rewindButton',
              'playToggle',
              'forwardButton',
              'volumePanel',
              'currentTimeDisplay',
              'timeDivider',
              'durationDisplay',
              'progressControl',
              'playbackRateMenuButton',
              'qualitySelector',         // from contrib-quality-levels
              'audioTrackButton',        // for dublaj
              'subsCapsButton',          // subtitles
              'fullscreenToggle',
            ]
        }
      })


      // Altyazı ekle
      subtitles.forEach((track) => {
        playerRef.current?.addRemoteTextTrack(
          {
            kind: 'subtitles',
            label: track.label,
            src: track.src,
            srclang: track.srclang,
            default: track.default || false,
          },
          false
        )
      })
    }

    return () => {
      playerRef.current?.dispose()
      playerRef.current = null
    }
  }, [src])

  return (
      <div className="relative rounded-lg overflow-hidden bg-black">
      {watermarkText && (
        <div className="absolute top-2 right-2 text-xs text-white/20 pointer-events-none z-10">
          {watermarkText}
        </div>
      )}

      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered w-full h-auto"
        playsInline
      />
    </div>
  )
}
