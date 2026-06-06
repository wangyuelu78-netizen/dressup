import Button from "../shared/components/Button.jsx";

export default function HomePage({ onNavigate }) {
  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">PROJECT STARTER</p>
          <h1 className="page-title">文物换装互动项目</h1>
          <p className="page-copy">
            先从清晰骨架开始：素材、画布、文物信息、场景解锁各自归位，后续再逐步接入拖拽、保存和更多玩法。
          </p>
        </div>
        <Button variant="primary" onClick={() => onNavigate("dressup")}>
          开始换装
        </Button>
      </header>

      <div className="home-grid">
        <article className="info-card">
          <h3>低耦合</h3>
          <p>页面只负责组合，换装状态和素材数据都在 feature 内部维护。</p>
        </article>
        <article className="info-card">
          <h3>可扩展</h3>
          <p>文物卡片、场景解锁、保存结果可以独立增长。</p>
        </article>
        <article className="info-card">
          <h3>先可运行</h3>
          <p>当前使用 mock 素材，点击素材即可叠加到人物底图。</p>
        </article>
      </div>
    </section>
  );
}
