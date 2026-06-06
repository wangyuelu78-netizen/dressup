import { useEffect, useState } from "react";
import DressupPage from "../pages/DressupPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ResultPage from "../pages/ResultPage.jsx";
import { loadFromStorage, saveToStorage } from "../shared/utils/storageUtils.js";

const unlockedAchievementsKey = "dressup_unlocked_achievement_ids";

const pages = {
  dressup: { label: "换装", icon: "styler", component: DressupPage },
  result: { label: "成就", icon: "military_tech", component: ResultPage },
  source: { label: "来源", icon: "auto_stories", component: HomePage },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("dressup");
  const [unlockedAchievementIds, setUnlockedAchievementIds] = useState(() =>
    loadFromStorage(unlockedAchievementsKey, []),
  );
  const CurrentPage = pages[currentPage].component;

  useEffect(() => {
    saveToStorage(unlockedAchievementsKey, unlockedAchievementIds);
  }, [unlockedAchievementIds]);

  function unlockAchievement(achievementId) {
    setUnlockedAchievementIds((current) => {
      if (current.includes(achievementId)) {
        return current;
      }

      return [...current, achievementId];
    });
  }

  return (
    <main className="mini-shell">
      <section className="mini-screen">
        <CurrentPage
          onNavigate={setCurrentPage}
          onUnlockAchievement={unlockAchievement}
          unlockedAchievementIds={unlockedAchievementIds}
        />
        <nav className="mini-tabbar" aria-label="底部导航">
          {Object.entries(pages).map(([key, page]) => (
            <button
              key={key}
              className={`mini-tab${currentPage === key ? " mini-tab-active" : ""}`}
              type="button"
              onClick={() => setCurrentPage(key)}
              aria-current={currentPage === key ? "page" : undefined}
            >
              <span className="material-symbols-outlined">{page.icon}</span>
              <span>{page.label}</span>
            </button>
          ))}
        </nav>
      </section>
    </main>
  );
}
