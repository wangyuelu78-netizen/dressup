export function getLayerStyle(item) {
  const position = item.position ?? {};

  return {
    left: `${position.left ?? 0}%`,
    top: `${position.top ?? 0}%`,
    width: `${position.width ?? 40}%`,
    zIndex: item.zIndex ?? 1,
    transform: `rotate(${position.rotate ?? 0}deg)`,
  };
}
