import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export type VideoJsPlayer = ReturnType<typeof videojs>;

type VideoJsPlayerOptions = Parameters<typeof videojs>[1];

type VideoJSProps = {
  options: VideoJsPlayerOptions;
  onReady?: (player: VideoJsPlayer) => void;
};

export const VideoJS = (props: VideoJSProps) => {
  const videoRef = React.useRef<HTMLDivElement | null>(null);
  const playerRef = React.useRef<VideoJsPlayer | null>(null);
  const {options, onReady} = props;

  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current && videoRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');

      videoElement.addEventListener('enterpictureinpicture', () => {
          console.warn('PIP not allowed!');
          if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
          }
      });

      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        // videojs.log('player is ready');
        onReady && onReady(player);
      });

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else if (playerRef.current) {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div className="relative rounded-lg overflow-hidden bg-black" data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
}

export default VideoJS;
