import { useState } from "react";
import HomePage from "../pages/HomePage.jsx";
import DressupPage from "../pages/DressupPage.jsx";
import ResultPage from "../pages/ResultPage.jsx";
import Button from "../shared/components/Button.jsx";

const pages = {
  home: { label: "首页", component: HomePage },
  dressup: { label: "文物换装", component: DressupPage },
  result: { label: "搭配结果", component: ResultPage },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const CurrentPage = pages[currentPage].component;

  return (
    <main className="app-shell">
      <aside className="app-sidebar">
        <div className="app-brand">
          <strong>入画成衣</strong>
          <span>文物换装互动原型</span>
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
