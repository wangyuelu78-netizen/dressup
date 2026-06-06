export default function SourceCard({ source }) {
  return (
    <article className="source-card">
      <h3>{source.sourcePainting}</h3>
      <p className="source-role">{source.sourceRole}</p>
      <p>{source.description ?? source.name}</p>
      {source.scene && <p className="source-scene">场景：{source.scene}</p>}
    </article>
  );
}
