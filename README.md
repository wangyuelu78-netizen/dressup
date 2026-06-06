# Dressup - 换装演示（React + Vite）

一个基于 React + Vite 的简单换装小项目，适合练手和学习前端交互（拖拽、画布渲染、状态管理、导出图片等）。

## 适合谁看

- 前端入门者：想快速跑起来项目，理解 React + Vite 开发流程。
- 希望学习画布交互（使用 Konva / react-konva）的开发者。

## 快速开始（小白版）

1. 安装 Node.js（建议 16+ 版本）。
2. 在项目根目录打开终端，安装依赖：

```bash
npm install
```

3. 启动开发服务器（有热更新）：

```bash
npm run dev
```

4. 打包发布：

```bash
npm run build
```

5. 预览构建后的静态站点：

```bash
npm run preview
```

6. 代码检查（eslint）：

```bash
npm run lint
```

如果遇到依赖或环境问题，先尝试删除 `node_modules` 并重新运行 `npm install`。

## 项目目录速览（小白友好）

- `src/main.jsx`：项目入口，挂载 React 应用。
- `src/app/pages/DressupPage.jsx`：换装页面入口。
- `src/app/features/dressup/components/`：换装相关组件（如 `DressupCanvas.jsx`、`ItemPanel.jsx`、`CategoryTabs.jsx`）。
- `src/app/features/dressup/data/dressupItems.js`：换装物品的数据来源，想新增物品就在这里添加。
- `src/app/features/dressup/hooks/useDressupState.js`：换装状态管理（使用 zustand）。
- `src/app/assets/`：所有图片/音频等资源，按 `characters`、`backgrounds`、`relics` 等子目录组织。
- `public/`：可直接访问的静态文件。

要修改界面文字或页面结构，一般从 `src/app/pages` 或 `src/app/features/*/components` 开始找。

## 添加或修改换装物品（最常见的改动）

1. 把素材（图片）放到 `src/app/assets/characters` 或 `src/app/assets/relics` 对应文件夹。
2. 在 `src/app/features/dressup/data/dressupItems.js` 新增一条物品记录，填写图片路径、类别、初始位置等。
3. 如果需要调整物品初始位置或对齐逻辑，参考 `src/app/features/dressup/utils/positionUtils.js`。

示例：新增一个饰品通常只要两步——把图片放到 assets，然后在 `dressupItems.js` 加一条配置。

## 常见问题（FAQ）

- 启动后页面空白？检查终端是否有错误信息，通常是依赖没装好或路径写错。 
- 热更新不工作？试试保存文件并确认终端没有卡住，必要时重启 `npm run dev`。
- 想导出当前画面为图片？项目已集成 `html-to-image`，在导出函数里调用即可。

## 我该改哪个文件？（小贴士）

- 改页面结构：看 `src/app/pages/DressupPage.jsx`。
- 改换装逻辑：看 `src/app/features/dressup/hooks/useDressupState.js` 与 `DressupCanvas.jsx`。
- 改样式：看 `src/index.css` 与组件内的类名。

## 开发建议

- 先在本地跑通 `npm run dev`，再改数据/图片，确认热更新生效后逐步调试。
- 小改动先只修改 `dressupItems.js`（不动组件逻辑），能快速看到效果。

## 贡献和许可

欢迎提交 issue 或 PR，用于修复 bug 或添加素材。此仓库没有特殊许可证请与仓库所有者确认许可信息。

---

（已为你备份原始 README 到 `README.md.bak`）
