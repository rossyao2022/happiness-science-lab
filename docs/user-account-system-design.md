# HappyKua Lab 用户账号与进度系统设计

## 目标

为静态版 Happiness Science Lab 增加一个本地账号系统，让同一台设备上的用户可以切换个人档案，并把各子模块产生的数据统一记录到用户空间中。

当前版本没有后端服务，因此账号是本地账号，不提供云端同步或真实身份认证。它的作用是：

- 区分不同本地用户的数据。
- 汇总各模块的练习、报告和访问进度。
- 为后续接入服务端账号、数据库或 AI 长期记忆保留统一接口。

## 架构

新增 `auth.js` 作为共享用户数据层，所有页面通过 `window.HappyKuaAuth` 使用它。

核心职责：

- `loginAccount` / `logoutAccount`：创建、登录和退出本地账号。
- `getCurrentUser`：读取当前用户。未登录时返回访客。
- `getModuleData` / `setModuleData` / `clearModuleData`：读写某个用户下的模块数据。
- `getProgressSummary`：汇总模块完成状态。
- `injectAccountWidget`：在页面导航中注入账号面板。
- `renderProgressPanel`：在首页渲染个人进度概览。

## 数据模型

账号索引：

```text
happykua-accounts
happykua-current-account
```

用户数据：

```text
happykua-user-data:<userId>
```

每个用户数据包含：

```json
{
  "version": 1,
  "userId": "user-xxxx",
  "profile": {
    "name": "用户昵称",
    "email": "本地标识"
  },
  "modules": {
    "threeGoodThings": {},
    "science": {},
    "talent": {},
    "card": {},
    "family": {},
    "book": {},
    "life100": {}
  },
  "activity": [],
  "createdAt": "ISO time",
  "updatedAt": "ISO time"
}
```

## 模块接入

- 首页 `index.html`：显示账号入口和总体进度。
- 三件好事 `three-good-things.html`：保存每日练习、KUA 行动、连续天数。
- 科学系统 `science.html`：记录科学地图访问。
- 天赋发现 `talent.html`：保存对话进度、四步回答和报告。
- 幸福卡牌 `card.html`：记录抽卡次数与最近卡牌。
- 家庭指南 `family.html`：保存家庭画像和生成的家庭教育报告。
- 幸福之书 `book.html`：读取当前用户的报告归档状态。
- 幸福人生100岁 `人生100/index.html`：记录最近查看的年龄指南。

## 兼容策略

已有模块原本使用独立 `localStorage` key。新系统保留访客模式下的旧 key 写入，确保旧测试和旧演示数据仍可用。登录账号后，模块优先读取用户空间，避免不同账号之间串数据。

## 后续扩展

如果未来接入真实后端，可以保留页面层调用方式不变，只替换 `auth.js` 内部存储：

- 本地账号变为服务端 session 或 token。
- `happykua-user-data:<userId>` 迁移到数据库记录。
- `setModuleData` 增加远程同步和冲突合并。
- `activity` 可作为 AI 长期记忆、周报和付费报告的输入。
