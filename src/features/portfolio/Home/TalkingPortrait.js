import useContent from "common/useContent";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

import { PortraitPlayButton, PortraitVideo } from "./homeStyles";

const TALKING_PORTRAIT_SRC = `${process.env.PUBLIC_URL}/talking-portrait/profile-dark-en.mp4`;

/**
 * Click-to-play AI talking portrait. Opt-in only — the clip lazy-loads on tap,
 * plays once over the still photo, then swaps back on `ended`. The generated
 * clip's last frame matches the portrait, so the return is seamless.
 *
 * @param {{ poster: string }} props - theme-matched still shown as video poster
 */
const TalkingPortrait = ({ poster }) => {
  const { home } = useContent();
  const [status, setStatus] = useState("idle");
  const loading = status === "loading";

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
          onPlaying={() => setStatus("playing")}
          onEnded={() => setStatus("idle")}
          onError={() => setStatus("idle")}
          onClick={() => setStatus("idle")}
        />
      )}
      {status !== "playing" && (
        <PortraitPlayButton
          onClick={() => setStatus("loading")}
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
