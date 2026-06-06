export default function RelicCard({ relic }) {
  return (
    <article className="relic-card">
      <h3>{relic.name}</h3>
      <p>{relic.description}</p>
    </article>
  );
}
