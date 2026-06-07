import { useEffect, useState } from "react";

export default function VideoResult({ message, result, selectedCharacter }) {
  const [videoMissing, setVideoMissing] = useState(false);

  useEffect(() => {
    setVideoMissing(false);
  }, [result?.videoSrc]);

  if (message) {
    return (
      <section className="video-result video-result-message" aria-live="polite">
        <p>{message}</p>
      </section>
    );
  }

  if (!selectedCharacter) {
    return (
      <section className="video-result video-result-message" aria-live="polite">
        <p>请选择一只小猫。</p>
      </section>
    );
  }

  if (!result) {
    return (
      <section className="video-result video-result-placeholder" aria-live="polite">
        <img
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <p>请选择同一套上装和下装</p>
      </section>
    );
  }

  return (
    <section className="video-result" aria-label="画中视频结果">
      {videoMissing ? (
        <div className="video-placeholder">
          <strong>视频生成中</strong>
          <span>{result.outfit.name}</span>
        </div>
      ) : (
        <video
          src={result.videoSrc}
          controls
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoMissing(true)}
        />
      )}
      <div className="video-result-meta">
        <h2>{result.outfit.resultText ?? result.outfit.name}</h2>
        <p>{result.outfit.sourcePainting} · {result.outfit.sourceRole}</p>
      </div>
    </section>
  );
}
