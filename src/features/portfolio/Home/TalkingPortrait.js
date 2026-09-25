import useContent from "common/useContent";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

import { PortraitPlayButton, PortraitVideo } from "./homeStyles";

const TALKING_PORTRAIT_SRC = `${process.env.PUBLIC_URL}/talking-portrait/profile-dark-en.mp4`;

/**
 * Click-to-play AI talking portrait. Opt-in only — the clip lazy-loads on tap,
 * plays once over the still photo, then swaps back on `ended`. The generated
 * clip's last frame matches the portrait, so the return is seamless.
 *
 * @param {{ poster: string, onPlayingChange?: (playing: boolean) => void }} props
 */
const TalkingPortrait = ({ poster, onPlayingChange }) => {
  const { home } = useContent();
  const [status, setStatus] = useState("idle");
  const loading = status === "loading";
  const updateStatus = (next) => {
    setStatus(next);
    onPlayingChange?.(next === "playing");
  };

  useEffect(() => () => onPlayingChange?.(false), [onPlayingChange]);

  return (
    <>
      {status !== "idle" && (
        <PortraitVideo
          data-testid="talking-portrait-video"
          src={TALKING_PORTRAIT_SRC}
          poster={poster}
          autoPlay
          playsInline
          preload="none"
          aria-label={home.hearMeLabel}
          onPlaying={() => updateStatus("playing")}
          onEnded={() => updateStatus("idle")}
          onError={() => updateStatus("idle")}
          onClick={() => updateStatus("idle")}
        />
      )}
      {status !== "playing" && (
        <PortraitPlayButton
          onClick={() => updateStatus("loading")}
          aria-label={home.hearMeLabel}
          aria-busy={loading}
          disabled={loading}
        >
          {loading ? <span className="spinner" /> : <FaPlay aria-hidden />}
        </PortraitPlayButton>
      )}
    </>
  );
};

export default TalkingPortrait;
