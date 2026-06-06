import { useState } from "react";
import HomePage from "../pages/HomePage.jsx";
import DressupPage from "../pages/DressupPage.jsx";
import ResultPage from "../pages/ResultPage.jsx";
import Button from "../shared/components/Button.jsx";

const pages = {
  home: { label: "首页", component: HomePage },
  dressup: { label: "画中衣橱", component: DressupPage },
  result: { label: "成就档案", component: ResultPage },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const CurrentPage = pages[currentPage].component;

  if (currentPage === "dressup") {
    return <CurrentPage onNavigate={setCurrentPage} />;
  }

  return (
    <main className="app-shell">
      <aside className="app-sidebar">
        <div className="app-brand">
          <strong>一键入画</strong>
          <span>古画服饰换装互动</span>
        </div>
        <nav className="app-nav" aria-label="页面导航">
          {Object.entries(pages).map(([key, page]) => (
            <Button
              key={key}
              variant={currentPage === key ? "active" : "ghost"}
              onClick={() => setCurrentPage(key)}
            >
              {page.label}
            </Button>
          ))}
        </nav>
      </aside>

      <section className="app-main">
        <CurrentPage onNavigate={setCurrentPage} />
      </section>
    </main>
  );
}
