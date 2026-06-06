import CharacterBase from "./CharacterBase.jsx";
import { getLayerStyle } from "../utils/positionUtils.js";

export default function DressupCanvas({ selectedItems }) {
  return (
    <section className="dressup-canvas" aria-label="人物换装画布">
      <div>
        <div className="canvas-stage">
          <CharacterBase />
          {selectedItems.map((item) => (
            <img
              key={item.id}
              className="canvas-layer"
              src={item.image}
              alt={item.name}
              style={getLayerStyle(item)}
            />
          ))}
        </div>
        {selectedItems.length === 0 && (
          <p className="canvas-empty">请选择右侧素材，开始生成搭配。</p>
        )}
      </div>
    </section>
  );
}
