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

/**
 * Click-to-play AI talking portrait. Opt-in only — the clip lazy-loads on tap,
 * plays once over the still photo, then swaps back on `ended`. The generated
 * clip's last frame matches the portrait, so the return is seamless.
 *
 * The control is withheld only when MediaCapabilities reports the decoder
 * can't play this clip smoothly — the still portrait is the fallback.
 *
 * @param {{ poster: string }} props - theme-matched still shown as video poster
 */
const TalkingPortrait = ({ poster }) => {
  const { home } = useContent();
  const [status, setStatus] = useState("idle");
  const [capable, setCapable] = useState(true);
  const loading = status === "loading";

  useEffect(() => {
    if (!navigator.mediaCapabilities?.decodingInfo) return;
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
  }, []);

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
