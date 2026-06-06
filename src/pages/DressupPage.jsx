import AchievementModal from "../features/achievements/components/AchievementModal.jsx";
import SourceCard from "../features/achievements/components/SourceCard.jsx";
import { achievements } from "../data/achievements.ts";
import CharacterSelector from "../features/dressup/components/CharacterSelector.jsx";
import DressCanvas from "../features/dressup/components/DressCanvas.jsx";
import ItemPanel from "../features/dressup/components/ItemPanel.jsx";
import useDressUpState from "../features/dressup/hooks/useDressupState.js";

export default function DressupPage({ onNavigate }) {
  const {
    activeAchievement,
    activeCategory,
    categories,
    characters,
    closeAchievement,
    currentSource,
    equipped,
    equippedItems,
    equipItem,
    openAchievementForTest,
    resetDressUp,
    setActiveCategory,
    selectedCharacter,
    selectCharacter,
    visibleItems,
  } = useDressUpState();

  return (
    <section className="gf-dressup" aria-label="古画换装">
      <header className="gf-topbar">
        <button
          className="gf-topbar-icon"
          type="button"
          onClick={() => (onNavigate ? onNavigate("home") : null)}
          aria-label="返回"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="gf-topbar-title">饰品详情</h1>
        <button className="gf-topbar-icon" type="button" aria-label="设置">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main className="gf-main">
        <div className="gf-paper-texture" aria-hidden="true" />

        <section className="gf-canvas-area" aria-label="角色画布区域">
          <div className="gf-canvas-frame">
            <div className="gf-scroll-edge gf-scroll-edge-top" aria-hidden="true" />
            <div className="gf-scroll-edge gf-scroll-edge-bottom" aria-hidden="true" />

            <div className="gf-canvas-inner">
              <DressCanvas
                equippedItems={equippedItems}
                selectedCharacter={selectedCharacter}
              />
              {equippedItems.length > 0 && (
                <div className="gf-equipped-tags" aria-label="当前已装备物品">
                  {equippedItems.map((item) => (
                    <span className="gf-equipped-pill" key={item.id}>
                      {item.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="gf-character-strip">
            <CharacterSelector
              characters={characters}
              selectedCharacter={selectedCharacter}
              onSelectCharacter={selectCharacter}
            />
          </div>

          {currentSource && <SourceCard source={currentSource} />}
        </section>

        <ItemPanel
          activeCategory={activeCategory}
          categories={categories}
          equipped={equipped}
          items={visibleItems}
          onCategoryChange={setActiveCategory}
          onEquipItem={equipItem}
          onReset={resetDressUp}
        />
      </main>

      <nav className="gf-bottom-nav" aria-label="底部导航">
        <button
          className="gf-nav-item"
          type="button"
          onClick={() => (onNavigate ? onNavigate("home") : null)}
        >
          <span className="material-symbols-outlined">brush</span>
          <span>工坊</span>
        </button>
        <button className="gf-nav-item gf-nav-item-active" type="button">
          <span className="material-symbols-outlined">wardrobe</span>
          <span>衣橱</span>
        </button>
        <button
          className="gf-nav-item"
          type="button"
          onClick={() => console.log("任务")}
        >
          <span className="material-symbols-outlined">assignment</span>
          <span>任务</span>
        </button>
        <button
          className="gf-nav-item"
          type="button"
          onClick={() => (onNavigate ? onNavigate("result") : null)}
        >
          <span className="material-symbols-outlined">military_tech</span>
          <span>成就</span>
        </button>
      </nav>

      <section className="achievement-test-entry" aria-label="成就弹窗测试入口">
        <span>测试成就弹窗</span>
        <button
          type="button"
          onClick={() => openAchievementForTest(achievements[0])}
        >
          测试：我在宋朝送外卖
        </button>
        <button
          type="button"
          onClick={() => openAchievementForTest(achievements[1])}
        >
          测试：今天也是大唐美人
        </button>
        <button
          type="button"
          onClick={() => openAchievementForTest(achievements[2])}
        >
          测试：夜场蹦迪
        </button>
        <button
          type="button"
          onClick={() => openAchievementForTest(achievements[3])}
        >
          测试：给懿德太子牵马
        </button>
      </section>

      <AchievementModal
        achievement={activeAchievement}
        open={Boolean(activeAchievement)}
        onClose={closeAchievement}
        onViewAchievements={() => {
          closeAchievement();
          if (onNavigate) {
            onNavigate("result");
          }
        }}
      />
    </section>
  );
}
