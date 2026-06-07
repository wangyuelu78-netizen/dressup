import { useState } from "react";

export default function AchievementImage({ achievement, className = "" }) {
  const [missing, setMissing] = useState(false);

  const imageSrc = achievement?.imageSrc ?? achievement?.achievementImage;

  if (!imageSrc || missing) {
    return (
      <div className={`achievement-image-fallback ${className}`.trim()}>
        <span className="material-symbols-outlined">
          {achievement?.isHidden ? "question_mark" : "local_florist"}
        </span>
      </div>
    );
  }

  return (
    <img
      className={`achievement-image ${className}`.trim()}
      src={imageSrc}
      alt={achievement.title}
      onError={() => setMissing(true)}
    />
  );
}
