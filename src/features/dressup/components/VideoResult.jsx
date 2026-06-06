import { useState } from "react";

export default function VideoResult({ message, result, selectedCharacter }) {
  const [videoMissing, setVideoMissing] = useState(false);

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
        <p>选择同一套上衣和下装后，预生成视频会显示在这里。</p>
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
        <h2>{result.outfit.name}</h2>
        <p>{result.outfit.sourcePainting} · {result.outfit.sourceRole}</p>
      </div>
    </section>
  );
}
