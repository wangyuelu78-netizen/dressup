export default function RelicCard({ relic }) {
  return (
    <article className="relic-card">
      <h3>{relic.name}</h3>
      {relic.dynasty && <span className="relic-dynasty">{relic.dynasty}</span>}
      <p>{relic.description}</p>
    </article>
  );
}
