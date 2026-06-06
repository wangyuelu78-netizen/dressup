import SceneUnlockModal from "../features/sceneUnlock/components/SceneUnlockModal.jsx";
import { scenePresets } from "../features/sceneUnlock/data/scenePresets.js";
import Button from "../shared/components/Button.jsx";

export default function ResultPage({ onNavigate }) {
  const firstScene = scenePresets[0];

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">RESULT</p>
          <h1 className="page-title">搭配结果</h1>
          <p className="page-copy">
            结果页先保留基础位置，后续可以接入截图保存、文物说明汇总、场景解锁和分享流程。
          </p>
        </div>
        <div className="result-actions">
          <Button onClick={() => onNavigate("dressup")}>继续搭配</Button>
          <Button variant="primary">保存结果</Button>
        </div>
      </header>

      <div className="result-panel">
        <h3>{firstScene.name}</h3>
        <p>{firstScene.description}</p>
      </div>
      <SceneUnlockModal open={false} scene={firstScene} onClose={() => {}} />
    </section>
  );
}
