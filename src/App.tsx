import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import DressupPage from "./pages/DressupPage";
import MakeupPage from "./pages/MakeupPage";
import ResultPage from "./pages/ResultPage";

type PageKey = "home" | "upload" | "dressup" | "makeup" | "result";

const pages: Record<PageKey, { label: string; component: () => JSX.Element }> = {
  home: { label: "首页", component: HomePage },
  upload: { label: "上传形象", component: UploadPage },
  dressup: { label: "文物换装", component: DressupPage },
  makeup: { label: "古画妆容", component: MakeupPage },
  result: { label: "最终成片", component: ResultPage }
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>("home");
  const CurrentPage = pages[currentPage].component;

  return (
    <main className="app-shell">
      <aside className="side-nav">
        <h2>入画成衣</h2>
        <p>看见文物，穿上文物。</p>
        <nav>
          {(Object.keys(pages) as PageKey[]).map((key) => (
            <button
              key={key}
              className={currentPage === key ? "active" : ""}
              onClick={() => setCurrentPage(key)}
            >
              {pages[key].label}
            </button>
          ))}
        </nav>
      </aside>

      <section className="page-panel">
        <CurrentPage />
      </section>
    </main>
  );
}

export default App;
