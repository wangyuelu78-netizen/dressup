import Button from "../shared/components/Button.jsx";

export default function HomePage({ onNavigate }) {
  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">ART DRESSUP</p>
          <h1 className="page-title">一键入画</h1>
          <p className="page-copy">
            把古画里的服饰穿到卡通角色身上，集齐套装，解锁来自画中的人物成就。
          </p>
        </div>
        <Button variant="primary" onClick={() => onNavigate("dressup")}>
          开始入画
        </Button>
      </header>

      <div className="home-grid">
        <article className="info-card">
          <h3>点击换装</h3>
          <p>选择服饰部件，角色会自动穿上对应的古画灵感装扮。</p>
        </article>
        <article className="info-card">
          <h3>套装成就</h3>
          <p>集齐同一古画人物的服饰后，系统会弹出专属成就。</p>
        </article>
        <article className="info-card">
          <h3>轻知识卡</h3>
          <p>解锁后了解来源古画、画中人物和背后的生活细节。</p>
        </article>
      </div>
    </section>
  );
}
