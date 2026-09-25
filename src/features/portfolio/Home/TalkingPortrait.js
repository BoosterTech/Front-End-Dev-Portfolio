import useContent from "common/useContent";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

import { PortraitPlayButton, PortraitVideo } from "./homeStyles";

const TALKING_PORTRAIT_SRC = `${process.env.PUBLIC_URL}/talking-portrait/profile-dark-en.mp4`;

const DECODING_INFO = {
  type: "file",
  audio: {
    contentType: 'audio/mp4; codecs="mp4a.40.2"',
    channels: "2",
    bitrate: 83000,
    samplerate: 32000,
  },
  video: {
    contentType: 'video/mp4; codecs="avc1.4d401f"',
    width: 480,
    height: 480,
    bitrate: 156000,
    framerate: 24,
  },
};

const isConstrainedConnection = () => {
  const c = navigator.connection;
  return Boolean(
    c && (c.saveData || ["slow-2g", "2g"].includes(c.effectiveType))
  );
};

/**
 * Click-to-play AI talking portrait. Opt-in only — the clip lazy-loads on tap,
 * plays once over the still photo, then swaps back on `ended`. The generated
 * clip's last frame matches the portrait, so the return is seamless.
 *
 * The control is withheld on constrained connections (Save-Data / 2G) and on
 * devices whose decoder can't play the clip smoothly per MediaCapabilities —
 * the still portrait is always the fallback.
 *
 * @param {{ poster: string, onPlayingChange?: (playing: boolean) => void }} props
 */
const TalkingPortrait = ({ poster, onPlayingChange }) => {
  const { home } = useContent();
  const [status, setStatus] = useState("idle");
  const [capable, setCapable] = useState(() => !isConstrainedConnection());
  const loading = status === "loading";
  const updateStatus = (next) => {
    setStatus(next);
    onPlayingChange?.(next === "playing");
  };

  useEffect(() => () => onPlayingChange?.(false), [onPlayingChange]);

  useEffect(() => {
    if (!capable || !navigator.mediaCapabilities?.decodingInfo) return;
    let cancelled = false;
    navigator.mediaCapabilities
      .decodingInfo(DECODING_INFO)
      .then((info) => {
        if (!cancelled && (!info.supported || !info.smooth)) setCapable(false);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [capable]);

  if (!capable) return null;

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
