import { useEffect, useState } from "react";

export default function VideoResult({ message, result, selectedCharacter }) {
  const [videoMissing, setVideoMissing] = useState(false);
  const isMysteryResult =
    result?.outfit?.isHidden ||
    [result?.outfit?.id, result?.outfit?.setId].some((value) =>
      String(value ?? "").includes("mystery"),
    );

  useEffect(() => {
    setVideoMissing(false);
  }, [result?.videoSrc]);

  if (message && !result) {
    return (
      <section className="video-result video-result-message" aria-live="polite">
        <p>{message}</p>
      </section>
    );
  }

  if (!selectedCharacter) {
    return (
      <section className="video-result video-result-message" aria-live="polite">
        <p>请选择一只灵瑞。</p>
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
    <section className={`video-result${isMysteryResult ? " video-result-mystery" : ""}`} aria-label="画中视频结果">
      {videoMissing ? (
        <div className="video-placeholder">
          <strong>{isMysteryResult ? "隐藏画面制作中……" : "画卷展开中……"}</strong>
          <span>{result.outfit.name}</span>
        </div>
      ) : (
        <video
          key={result.videoSrc}
          src={result.videoSrc}
          aria-label={`${result.outfit.name}动态画面`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoMissing(false)}
          onError={() => setVideoMissing(true)}
        />
      )}
      <div className="video-result-meta">
        <h2>{result.outfit.resultText ?? result.outfit.name}</h2>
        <p>
          {isMysteryResult
            ? "神秘画卷 · 隐藏形态"
            : `${result.outfit.sourcePainting} · ${result.outfit.sourceRole}`}
        </p>
      </div>
    </section>
  );
}
