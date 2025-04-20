'use client'
import React from 'react';

// This imports the functional component from the previous sample.
import VideoJS, { VideoJsPlayer } from './videojs';
import '@/styles/videojs-custom.css';

// Video.js Plugins
type Player = VideoJsPlayer & {
  hlsQualitySelector?: () => void;
};

import 'videojs-hotkeys';
import 'videojs-hls-quality-selector';

export const VideoPlayer = () => {
  const playerRef = React.useRef<VideoJsPlayer | null>(null);

  const videoJsOptions = {
    poster: '/images/example-video-thumbnail.png',
    preload: 'metadata',
    disablePictureInPicture: true,
    enableDocumentPictureInPicture: false,
    enableSmoothSeeking: true,
    language: 'tr',
    playbackRates: [0.5, 1, 1.5, 2],
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://pub-2da385fedc5a4ce5b1855442de31d552.r2.dev/course-1/module-1/lesson-1/video/master.m3u8',
      type: 'application/x-mpegURL'
    }],
    controlBar: {
      pictureInPictureToggle: false,
      skipButtons: {
        backward: 10,
        forward: 10
      },
      children: [
        'skipBackward',
        'playToggle',
        'skipForward',
        { name: 'volumePanel', inline: false },
        'progressControl',
        'remainingTimeDisplay',
        'playbackRateMenuButton',
        'subsCapsButton',
        'fullscreenToggle',
      ]
    },
    spatialNavigation: {
      enabled: true,
      horizontalSeek: true
    }
  };

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;

    // Subtitles Init
    player.addRemoteTextTrack({
      kind: 'subtitles',
      label: 'Türkçe',
      src: 'https://pub-2da385fedc5a4ce5b1855442de31d552.r2.dev/course-1/module-1/lesson-1/subtitle/tr.vtt',
      srclang: 'tr'
    }, false);
    player.addRemoteTextTrack({
      kind: 'subtitles',
      label: 'English',
      src: 'https://pub-2da385fedc5a4ce5b1855442de31d552.r2.dev/course-1/module-1/lesson-1/subtitle/en.vtt',
      srclang: 'en',
      default: true
    }, false);
    player.addRemoteTextTrack({
      kind: 'subtitles',
      label: 'Japan',
      src: 'https://pub-2da385fedc5a4ce5b1855442de31d552.r2.dev/course-1/module-1/lesson-1/subtitle/jp.vtt',
      srclang: 'jp'
    }, false);

    // VIDEO.JS PLUGIN INITS
    // Player Hotkeys Plugin Init
    player.hotkeys({
    volumeStep: 0.1,
    seekStep: 10, 
    enableModifiersForNumbers: false
    })
    // HLS Quality Selector
    player.hlsQualitySelector?.();
  };

  return (<VideoJS options={videoJsOptions} onReady={handlePlayerReady} />);
}

