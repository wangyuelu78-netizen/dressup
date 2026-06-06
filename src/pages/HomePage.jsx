import Button from "../shared/components/Button.jsx";

export default function HomePage({ onNavigate }) {
  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">PROJECT STARTER</p>
          <h1 className="page-title">一键入画</h1>
          <p className="page-copy">
            选择主办方提供的卡通角色，再把中国古画中提取、重绘的服饰部件穿到角色身上。
            搭出完整画中人物套装时，会解锁对应成就与古画来源说明。
          </p>
        </div>
        <Button variant="primary" onClick={() => onNavigate("dressup")}>
          打开衣橱
        </Button>
      </header>

      <div className="home-grid">
        <article className="info-card">
          <h3>古画服饰</h3>
          <p>服饰按头部、上装、下装、配饰和手持物分类。</p>
        </article>
        <article className="info-card">
          <h3>自由搭配</h3>
          <p>同类服饰只装备一件，新选择会自动替换旧选择。</p>
        </article>
        <article className="info-card">
          <h3>成就解锁</h3>
          <p>搭出完整套装后弹出成就，并展示来源古画说明。</p>
        </article>
      </div>
    </section>
  );
}
