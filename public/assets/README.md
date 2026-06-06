# 素材上传说明

当前项目交互逻辑已经接好，图片可以后续单独替换。队友上传图片时只需要按下面路径放文件，不需要修改成就判断、确认搭配或解锁逻辑。

## 角色图片

角色基础图放在：

```text
public/assets/characters/cat_01/base.png
public/assets/characters/cat_02/base.png
public/assets/characters/cat_03/base.png
public/assets/characters/cat_04/base.png
public/assets/characters/cat_05/base.png
```

建议使用透明 PNG，画布按 512x512 对齐。`base.png` 会同时用作角色大图和角色选择缩略图。

## 服饰图片

服饰图放在 `public/assets/items/` 下，文件名需要和 `src/data/items.ts` 里的 `src` 一致。

```text
public/assets/items/qingming/delivery_01/top.png
public/assets/items/qingming/delivery_01/bottom.png
public/assets/items/qingming/delivery_01/foodbox.png

public/assets/items/tang_lady/lady_01/hair.png
public/assets/items/tang_lady/lady_01/flower.png
public/assets/items/tang_lady/lady_01/shawl.png
public/assets/items/tang_lady/lady_01/dress.png

public/assets/items/night_banquet/pipa_lady/top.png
public/assets/items/night_banquet/pipa_lady/skirt.png
public/assets/items/night_banquet/pipa_lady/pipa.png

public/assets/items/night_banquet/dancer_lady/hair.png
public/assets/items/night_banquet/dancer_lady/top.png
public/assets/items/night_banquet/dancer_lady/skirt.png
public/assets/items/night_banquet/dancer_lady/shawl.png

public/assets/items/night_banquet/clapping_lady/headwear.png
public/assets/items/night_banquet/clapping_lady/robe.png
public/assets/items/night_banquet/clapping_lady/belt.png

public/assets/items/yide_prince/horse_attendant/top.png
public/assets/items/yide_prince/horse_attendant/bottom.png
public/assets/items/yide_prince/horse_attendant/reins.png
```

建议所有服饰 PNG 使用透明背景，并和角色底图使用同一套 512x512 坐标。缺图时页面会显示占位，但选择、确认、接近成就和解锁成就功能仍然可用。

## 成就图片

成就图放在：

```text
public/assets/achievements/
```

当前已接入：

```text
song-delivery.jpeg
tang-lady.jpeg
night-banquet.jpeg
yide-prince-horse.jpeg
```

没有图片的成就会显示统一占位。

## 不要覆盖的逻辑文件

以下文件是交互和成就逻辑，上传 UI 或图片时不要覆盖：

```text
src/features/dressup/hooks/useDressupState.js
src/features/achievements/utils/findClosestAchievement.js
src/features/achievements/utils/findUnlockedAchievement.js
src/data/items.ts
src/data/sets.ts
src/data/achievements.ts
src/app/App.jsx
```
