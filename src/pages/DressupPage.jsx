import DressupCanvas from "../features/dressup/components/DressupCanvas.jsx";
import ItemPanel from "../features/dressup/components/ItemPanel.jsx";
import RelicCard from "../features/relicInfo/components/RelicCard.jsx";
import { relicInfoList } from "../features/relicInfo/data/relicInfo.js";
import { dressupItems } from "../features/dressup/data/dressupItems.js";
import useDressupState from "../features/dressup/hooks/useDressupState.js";
import Button from "../shared/components/Button.jsx";
import { saveToStorage } from "../shared/utils/storageUtils.js";

export default function DressupPage({ onNavigate }) {
  const dressup = useDressupState(dressupItems);
  const activeRelicInfo = relicInfoList.find(
    (relic) => relic.itemId === dressup.lastSelectedItem?.id,
  );

  function viewResult() {
    saveToStorage("dressup_selected_items", dressup.selectedItems);
    onNavigate("result");
  }

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">DRESSUP</p>
          <h1 className="page-title">文物换装</h1>
          <p className="page-copy">
            从右侧选择发型、发饰、耳饰、颈饰和衣物，素材会按类别叠加到中间的人物底图上。
          </p>
        </div>
        <Button variant="primary" onClick={viewResult}>
          查看结果
        </Button>
      </header>

      <div className="dressup-layout">
        <div className="dressup-workspace">
          <DressupCanvas selectedItems={dressup.selectedItems} />
          {dressup.selectedItems.length > 0 && (
            <div className="selected-strip" aria-label="已选择素材">
              {dressup.selectedItems.map((item) => (
                <span className="selected-pill" key={item.id}>
                  {item.categoryLabel}：{item.name}
                </span>
              ))}
            </div>
          )}
          {activeRelicInfo && <RelicCard relic={activeRelicInfo} />}
        </div>

        <ItemPanel
          activeCategory={dressup.activeCategory}
          categories={dressup.categories}
          items={dressup.visibleItems}
          selectedByCategory={dressup.selectedByCategory}
          onCategoryChange={dressup.setActiveCategory}
          onSelectItem={dressup.selectItem}
        />
      </div>
    </section>
  );
}
