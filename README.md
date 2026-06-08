# Happiness Science Lab

Static HappyKua happiness-science practice pages and interaction prototypes.

## Pages

- `index.html` - lab home page
- `three-good-things.html` - three good things practice
- `talent.html` - talent report flow
- `人生100/index.html` - 幸福人生100岁：按年龄生成金句、礼物建议和 SPIRE 幸福指南
- `science.html`, `family.html`, `book.html`, `card.html` - supporting pages
- `long-life.html` - legacy Happy 100 entry, redirects to `人生100/index.html`

## 幸福人生100岁使用说明

打开 `人生100/index.html`，在首屏输入或拖动选择 0-100 岁之间的年龄。页面会同步生成这一岁的金句、祝福、年龄段解读、四个礼物建议，以及对应的 SPIRE 幸福指南。

也可以从首页 `index.html` 的“幸福人生100岁”卡片进入。旧入口 `long-life.html` 已保留为兼容跳转页。

## Tests

Run the lightweight contract checks with Node:

```bash
node tests/three_good_things_contract.test.mjs
node tests/talent_report_contract.test.mjs
```
