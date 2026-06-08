# 幸福人生100岁

0 到 100 岁的人生金句、成长心理学解读、礼物推荐和 SPIRE 幸福指南静态网站。

## 使用说明

打开 `index.html` 后，在首屏选择 0-100 岁之间的年龄。页面会立即生成：

- 这一岁的金句和祝福
- 年龄段解读与成长心理学说明
- 四个适合这一岁的礼物建议，并提供第三方平台搜索入口
- SPIRE 幸福指南：身体、情绪、投入、关系、意义五个维度的行动建议

页面下方保留“100岁总览”，可以逐岁展开查看对应金句、解读和礼物建议。首页入口位于上级目录 `../index.html` 的“幸福人生100岁”卡片；旧入口 `../long-life.html` 会自动跳转到本页面。

## 内容维护

- 0-100 岁金句在 `script.js` 的 `ageQuotes`
- 年龄段解读和礼物建议在 `script.js` 的 `stageDetails`
- 特殊年龄礼在 `script.js` 的 `specialAgeDetails`
- SPIRE 分段指南在 `script.js` 的 `spireStages`
- 页面结构在 `index.html`
- 视觉样式在 `styles.css`

## 部署

这是一个纯静态站点，入口文件是 `index.html`，可以直接部署到 Vercel、Netlify、Cloudflare Pages 或 GitHub Pages。

### Vercel

- Framework Preset: Other
- Build Command: 留空
- Output Directory: `.`

### Netlify

- Build command: 留空
- Publish directory: `.`

### GitHub Pages

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/root`
