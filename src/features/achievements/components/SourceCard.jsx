export default function SourceCard({ source }) {
  return (
    <article className="source-card">
      <span className="source-label">来源古画</span>
      <h3>{source.sourcePainting}</h3>
      <p className="source-role">画中人物：{source.sourceRole}</p>
      <p>{source.description ?? source.name}</p>
      {source.scene && <p className="source-scene">场景：{source.scene}</p>}
    </article>
  );
}
