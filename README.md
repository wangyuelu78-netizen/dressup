# 一键入画

古画服饰换装互动 Demo。当前仓库重点维护交互功能：选择角色、选择服饰、确认搭配、匹配成就、提示接近成就、保存已解锁成就。

## 开发命令

```bash
npm install
npm run dev
npm run lint
npm run build
```

## 队友查看当前分支

当前交互逻辑在这个分支：

```text
feat/achievement-screen-design
```

如果已经 clone 过仓库：

```bash
git fetch origin
git checkout feat/achievement-screen-design
```

如果还没有 clone：

```bash
git clone https://github.com/wangyuelu78-netizen/dressup.git
cd dressup
git checkout feat/achievement-screen-design
```

## 功能边界

当前阶段不负责最终小猫/小人和服饰图片制作。缺少图片时，页面会显示占位，但不影响：

- 角色选择
- 服饰选择
- 确认搭配
- 完整套装解锁成就
- 非完整套装提示接近哪个成就
- 成就状态本地保存

## 素材交接

图片上传说明见 [public/assets/README.md](public/assets/README.md)。

队友上传素材时，只需要把图片放到说明中的固定路径。角色和服饰建议使用透明 PNG，并按 512x512 画布对齐。

## 不要覆盖的逻辑文件

UI 或图片更新时不要覆盖这些文件：

```text
src/features/dressup/hooks/useDressupState.js
src/features/achievements/utils/findClosestAchievement.js
src/features/achievements/utils/findUnlockedAchievement.js
src/data/items.ts
src/data/sets.ts
src/data/achievements.ts
src/app/App.jsx
```

如果需要改 UI，优先改：

```text
src/index.css
src/pages/*.jsx
src/features/**/components/*.jsx
public/assets/
```
