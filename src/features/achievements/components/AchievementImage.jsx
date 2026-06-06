import { useState } from "react";

export default function AchievementImage({ achievement, className = "" }) {
  const [missing, setMissing] = useState(false);

  if (!achievement?.imageSrc || missing) {
    return (
      <div className={`achievement-image-fallback ${className}`.trim()}>
        <span className="material-symbols-outlined">local_florist</span>
      </div>
    );
  }

  return (
    <img
      className={`achievement-image ${className}`.trim()}
      src={achievement.imageSrc}
      alt={achievement.title}
      onError={() => setMissing(true)}
    />
  );
}
