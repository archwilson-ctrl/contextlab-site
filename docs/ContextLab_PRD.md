# ContextLab 專案規格書 PRD

版本：v1.0  
日期：2026-07-21  
專案名稱：ContextLab  
建議網域：contextlab.tw  
文件目的：整理 ContextLab 品牌、網域、網站架構、GitHub Pages、Cloudflare、NAS 與未來內部系統規劃，作為第一版網站與長期發展的執行依據。

---

## 1. 專案背景

ContextLab 起源於一系列關於自建網域、Cloudflare Tunnel、NAS、PWA、工程照片管理、AI Agent、Notion、BIM 與企業知識庫的討論。

目前的核心需求不是立即建立一個商業接案網站，而是建立一個可長期累積的學習與實驗平台。這個平台初期用於記錄個人在 AI、建築、BIM、NAS、Notion、系統整合與企業流程上的學習成果，未來可逐步轉型為企業知識管理與 AI 顧問品牌。

本專案第一年主要用途：

- 記錄 AI 與數位工具學習歷程
- 建立個人知識庫與公開作品集
- 實驗 GitHub Pages、Hugo、Cloudflare、NAS API、Cloudflare Tunnel
- 累積未來顧問服務的方法論
- 作為 ContextLab 品牌雛形

長期來看，ContextLab 可從個人學習網站，演進為協助企業建立內部知識、流程與 AI 系統的顧問品牌。

---

## 2. 專案願景

ContextLab 的願景是：

> 讓企業建立自己的知識、流程與 AI。

更完整的定位是：

> ContextLab 是一個結合企業知識管理、AI 工作流程、建築經驗、BIM、文件管理與內部系統整合的數位實驗室。

核心信念：

> 不是賣 AI，而是打造企業的 Context。

AI 的價值不只來自模型本身，而是企業是否能整理出可被 AI 理解、搜尋、引用與執行的知識脈絡。ContextLab 要累積的，不只是工具使用紀錄，而是一套可被複製的方法論。

---

## 3. 品牌定位

### 3.1 初期定位

第一年建議定位為：

> ContextLab = Wilson 的 AI 與企業知識實驗室

初期不急著定位為正式顧問公司，而是作為公開學習紀錄、作品集與方法論沉澱平台。

### 3.2 中期定位

第二階段可定位為：

> ContextLab = 建築 × AI × 知識管理的實驗平台

重點從個人學習延伸到實際專案驗證，例如工程照片管理、NAS API、BIM Agent、Notion 知識庫、LINE Bot、企業 SOP 等。

### 3.3 長期定位

第三階段可定位為：

> ContextLab = Enterprise Knowledge & AI Consulting

服務方向可包含：

- 企業知識庫建置
- AI Agent 導入
- Notion / NAS / Google Workspace 整合
- 建築業數位流程設計
- BIM 與工程資料管理
- 內部系統與 Dashboard 建置
- 顧問、教育訓練與維護服務

### 3.4 品牌標語候選

建議標語：

- Build Knowledge. Empower AI.
- 讓企業建立自己的知識、流程與 AI。
- 不是賣 AI，而是打造企業的 Context。
- Building Enterprise Knowledge for the AI Era.

---

## 4. 目標使用者

### 4.1 第一階段使用者

- Wilson 本人
- 熟悉專案的內部成員
- 未來可能查看學習紀錄的朋友、合作夥伴或同事

### 4.2 第二階段使用者

- 開富力建設內部人員
- 對 AI、BIM、工程管理、知識庫有興趣的同業
- 可能尋求合作的建築、營造或設計領域夥伴

### 4.3 第三階段使用者

- 建設公司
- 營造廠
- 建築師事務所
- 中小企業主
- 需要建立內部知識系統與 AI 工作流程的企業

---

## 5. 網域策略

### 5.1 主網域

建議註冊：

```text
contextlab.tw
```

理由：

- 簡短好記
- 適合台灣市場
- 符合目前學習與實驗室定位
- 年費約 NT$800，作為品牌資產成本合理
- 即使未來不立刻商業化，也可作為作品集與知識庫入口

### 5.2 購買年限

建議購買 3 年。

原因：

- 符合三年發展節奏
- 降低忘記續約風險
- 成本差異不大
- 可讓內容與品牌穩定累積

### 5.3 網域註冊原則

網域需登記在本人或公司名下，不建議登記在網站公司或外包商名下。

必要條件：

- 註冊人為 Wilson 本人或公司法人
- 管理信箱由自己長期掌控
- 開啟自動續約
- 開啟兩步驟驗證
- 開啟網域鎖定
- 保留完整帳號密碼與付款權限

### 5.4 DNS 管理策略

建議分工：

```text
網域註冊商
負責購買與持有 contextlab.tw

Cloudflare
負責 DNS、HTTPS、CDN、安全設定、Tunnel

GitHub Pages
負責第一版靜態網站

DS923+ NAS
負責未來 API、PWA、照片與內部系統
```

---

## 6. 網站資訊架構 IA

ContextLab 不建議做成傳統部落格，而是做成 Digital Garden 與 Knowledge Base。

### 6.1 第一版網站架構

```text
ContextLab
├── Home
├── Projects        專案實作
├── Knowledge       知識庫
├── Learning Log    學習日誌
├── AI Workflows    AI 工作流
├── Construction    建築與 BIM
├── Photography     影像筆記
└── About           關於我 / 發展藍圖
```

### 6.2 Home

首頁用途：

- 說明 ContextLab 是什麼
- 呈現最新學習紀錄
- 展示正在進行的專案
- 引導使用者進入專案實作、知識庫、學習日誌、AI 工作流、建築與 BIM、影像筆記

首頁主訊息建議：

```text
ContextLab
Building Enterprise Knowledge for the AI Era.
```

或：

```text
ContextLab
Wilson 的 AI 與企業知識實驗室
```

### 6.3 Projects

用於記錄實際專案與實驗。

初期可包含：

- KFC Photo PWA：開富力工程相片上傳（`kfcphoto.contextlab.tw`，已上線）
- Photo System：工程照片管理系統（各建案以 `{專案代號}photo.contextlab.tw` 命名）
- NAS API：DS923+ API Server 實驗
- Cloudflare Tunnel：安全對外連線
- Notion Knowledge Base：Notion 知識庫架構
- BIM Agent：BIM 與 AI 整合
- LINE Bot：工地現場互動介面
- Context Agent：企業知識 AI 助理

### 6.4 Knowledge

作為長期知識庫。

建議分類：

- AI
- Prompt Engineering
- Agent
- Cloudflare
- NAS
- Notion
- BIM
- 建築管理
- SOP
- 系統設計
- 工具筆記

### 6.5 Learning Log

用於記錄每日或每週學習內容。

文章可包含：

- 今天學到什麼
- 遇到什麼問題
- 解法是什麼
- 下次要改善什麼
- 是否可轉換成 SOP 或知識卡

### 6.6 AI Workflows

整理可重複使用的 AI 工作流程。

例如：

- 將學習筆記轉成網站文章
- 將會議內容轉成 SOP
- 將工程照片整理成 Notion 紀錄
- 將施工問題轉成知識庫條目
- 將文件轉成 AI Agent 可查詢資料

### 6.7 Construction / BIM

專門沉澱建築與 BIM 相關內容。

內容可包含：

- Revit 筆記
- BIM 流程
- 工程照片分類
- 施工管理
- 建築法規學習
- 工地問題紀錄
- 建案流程知識

### 6.8 Photography

影像筆記用途：

- 展示攝影作品
- 記錄城市、建築、空間、光影、材料與生活場景觀察
- 讓 ContextLab 不只是技術筆記，也能呈現觀察力與美感
- 未來可作為建築、空間與品牌敘事的一部分

內容可包含：

- 建築攝影
- 城市觀察
- 工地紀錄
- 空間構圖
- 材料與細節
- 旅行照片
- 黑白攝影
- 街景與生活觀察

### 6.9 About / Roadmap

介紹 Wilson、ContextLab 的背景，以及發展藍圖。

可分為：

- 我是誰
- 為什麼建立 ContextLab
- 我關注的主題
- 目前的實驗
- 三年 Roadmap
- 聯絡方式


---

## 7. 技術架構

### 7.1 第一版架構

建議採用：

```text
contextlab.tw
    │
    ▼
Cloudflare DNS
    │
    ▼
GitHub Pages
    │
    ▼
Hugo 靜態網站
```

### 7.2 選擇 GitHub Pages + Hugo 的原因

優點：

- 免費
- 部署簡單
- 速度快
- 不需要資料庫
- 安全風險低
- 文章以 Markdown 儲存，容易備份與轉移
- 可用 Cursor、Codex、ChatGPT 協助維護
- 適合學習紀錄、作品集與 Digital Garden

### 7.3 不建議初期使用 WordPress 的原因

- 需要資料庫
- 需要更新主程式與外掛
- 維護成本較高
- 安全風險較高
- 對目前「學習紀錄與知識庫」需求過重

### 7.4 Hugo 內容結構建議

```text
content/
├── projects/
├── knowledge/
├── learning-log/
├── workflows/
├── construction/
├── photography/
└── about/
```

### 7.5 Markdown Front Matter 建議

每篇文章建議包含：

```yaml
---
title: "Cloudflare Tunnel 學習筆記"
date: 2026-07-21
updated: 2026-07-21
tags: ["Cloudflare", "NAS", "Tunnel", "API"]
category: "Infrastructure"
status: "growing"
summary: "記錄 Cloudflare Tunnel 如何連接 DS923+ API Server。"
---
```

### 7.6 文章狀態設計

Digital Garden 適合使用文章狀態，而不是只用日期排序。

建議狀態：

- seed：初始想法
- growing：持續整理中
- evergreen：成熟筆記
- archived：暫停或歸檔

---

## 8. Cloudflare 整合

### 8.1 第一階段

Cloudflare 用於：

- DNS 管理
- HTTPS
- CDN
- 基本安全防護
- 網域轉址設定

### 8.2 DNS 規劃

初期：

```text
contextlab.tw        -> GitHub Pages
www.contextlab.tw    -> GitHub Pages
```

已上線與規劃中：

```text
kfcphoto.contextlab.tw -> Cloudflare Tunnel -> 開富力工程相片上傳 PWA（已上線）
api.contextlab.tw      -> Cloudflare Tunnel -> DS923+ API Server
lab.contextlab.tw      -> Vercel -> 互動工具、AI Demo
docs.contextlab.tw     -> GitHub Pages 或未來文件系統
ai.contextlab.tw       -> Cloudflare Tunnel -> AI Agent
status.contextlab.tw   -> 狀態頁或監控服務
```

各建案工程照片 PWA 採專案專用子網域，例如 `{專案代號}photo.contextlab.tw`。

### 8.3 Cloudflare Tunnel 規劃

未來當 NAS 上有 API Server 或 PWA 服務時，建議使用 Cloudflare Tunnel。

架構：

```text
手機 / 使用者
    │ HTTPS
    ▼
Cloudflare
    │ Tunnel
    ▼
DS923+ cloudflared container
    │
    ▼
API Server / PWA / NAS Folder
```

優點：

- NAS 不需要開對外連接埠
- 不需要固定 IP
- 有 HTTPS
- 比 DDNS + Port Forward 安全
- 適合 API Server 與 PWA 服務

### 8.4 不建議第一版使用 DDNS + Port Forward

原因：

- 對 NAS 暴露風險較高
- 需要熟悉防火牆、反向代理、HTTPS、更新維護
- 出錯時可能影響 DSM、SMB 或其他內部服務

---

## 9. 未來 NAS API 擴充

### 9.1 NAS 角色

DS923+ 未來可作為：

- API Server 執行環境
- 工程照片儲存空間
- PWA 後端服務
- AI Agent 的內部資料來源
- Notion / NAS / LINE Bot 整合中心

### 9.2 建議服務

```text
DS923+
├── cloudflared container
├── Photo API
├── PWA frontend
├── Nginx reverse proxy
├── LINE Bot service
├── AI Agent service
├── Project config
└── PostgreSQL / SQLite
```

### 9.3 工程照片系統初步需求

未來可建置：

- 手機 PWA 上傳照片
- 依專案、日期、樓層、工項分類
- 儲存至 NAS 指定資料夾
- 同步摘要至 Notion Database
- 透過 LINE Bot 查詢或回報
- 由 AI Agent 協助整理照片描述、分類與紀錄

### 9.4 設定檔規劃

Notion Database ID 對應表可放在 API Server 設定檔：

```text
projects.json
```

範例概念：

```json
{
  "projects": [
    {
      "id": "project-a",
      "name": "某某建案",
      "notion_database_id": "xxxx",
      "nas_photo_path": "/volume1/projects/project-a/photos"
    }
  ]
}
```

### 9.5 安全原則

不可公開：

- DSM 管理介面
- NAS SMB
- Notion Token
- Gemini Key
- OpenAI API Key
- 內部設定檔

只公開必要服務：

- kfcphoto.contextlab.tw（及各建案 `{專案代號}photo.contextlab.tw`）
- api.contextlab.tw
- lab.contextlab.tw

---

## 10. 功能需求

### 10.1 第一版網站功能

必要功能：

- 首頁
- 文章列表
- 文章頁
- 分類頁
- 標籤頁
- 專案實作頁
- 知識庫頁
- 學習日誌頁
- AI 工作流頁
- 建築與 BIM 頁
- 影像筆記頁
- 關於我頁（包含發展藍圖）
- 搜尋功能
- Markdown 內容管理
- 響應式手機版
- GitHub Pages 部署
- Cloudflare DNS 綁定

### 10.2 第二版功能

可加入：

- Digital Garden 狀態標籤
- 文章更新日期
- 相關文章
- 知識圖譜
- 專案進度頁
- RSS
- Sitemap
- SEO metadata
- Open Graph 社群分享圖

### 10.3 第三版功能

可加入：

- Notion 同步文章
- 自動將學習筆記轉成 Markdown
- AI 協助生成文章摘要
- NAS API 展示頁
- 工程照片 PWA Demo
- 登入型內部工具
- 客戶案例頁
- Services 頁

---

## 11. 非功能需求

### 11.1 效能

- 首頁載入速度應快速
- 靜態資源需壓縮
- 圖片需最佳化
- 手機網路下仍可順暢閱讀

### 11.2 安全

- 初期不使用資料庫與後台登入
- 使用 HTTPS
- DNS 由 Cloudflare 管理
- GitHub 帳號需開啟 2FA
- Cloudflare 帳號需開啟 2FA
- API Key 不可放入 GitHub repository

### 11.3 可維護性

- 所有文章使用 Markdown
- 網站設定集中管理
- 文章分類清楚
- GitHub 作為版本控管
- 未來可轉移到其他平台

### 11.4 可擴充性

- 靜態網站與 NAS API 分離
- 主站與子網域服務分離
- 未來可加入 Cloudflare Tunnel
- 未來可加入後端服務與資料庫

### 11.5 SEO

- 每篇文章需有 title、description、tags
- 產生 sitemap.xml
- 支援 Open Graph metadata
- 使用清楚 URL 結構

---

## 12. UI/UX 概念

### 12.1 設計方向

ContextLab 的視覺不應像傳統部落格，也不應像銷售型公司官網。第一版建議介於：

- Digital Garden
- Knowledge Base
- Technical Notebook
- Personal Research Lab
- Future Consulting Portfolio

### 12.2 風格關鍵字

- 乾淨
- 專業
- 留白
- 易讀
- 知識感
- 工程感
- 可長期維護

### 12.3 色彩建議

建議主色：

- 白色背景
- 深灰文字
- 科技藍作為點綴
- 淺灰分隔線

避免：

- 過度花俏
- 太像行銷頁
- 太多漸層
- 太多裝飾性圖形

### 12.4 首頁布局概念

```text
ContextLab
Building Enterprise Knowledge for the AI Era.

[Latest Research]
[專案實作]
[知識庫]
[學習日誌]
[影像筆記]
```

首頁應讓使用者第一眼理解：

- 這是一個 AI 與企業知識實驗室
- 內容會持續累積
- 有實作專案，不只是心得文章
- 未來具備顧問與平台化潛力

### 12.5 文章頁布局

建議包含：

- 標題
- 摘要
- 發布日期
- 更新日期
- 標籤
- 文章狀態
- 內文
- 相關文章
- 下一步

---

## 13. 三年 Roadmap

### 13.1 第一年：學習與內容累積

目標：

- 註冊 contextlab.tw
- 建立 GitHub Pages + Hugo 網站
- 設定 Cloudflare DNS
- 開始記錄 AI、NAS、Notion、BIM、工程管理學習
- 建立專案實作、知識庫、學習日誌與影像筆記
- 累積公開作品集

成果：

- ContextLab 1.0 上線
- 至少 30 篇學習紀錄
- 至少 5 個專案頁
- 初步網站風格與內容架構完成

### 13.2 第二年：方法論與內部系統驗證

目標：

- 建立工程照片 PWA Prototype
- DS923+ API Server 初步上線
- Cloudflare Tunnel 導入
- Notion Database 與 NAS 整合
- 建立可重複使用的 AI Workflows
- 將開富力內部流程轉為標準化 SOP

成果：

- 工程照片系統可內部試用
- AI Agent 可查詢部分知識庫
- 建立 ContextLab Framework 雛形
- 形成可展示案例

### 13.3 第三年：顧問服務與品牌升級

目標：

- 評估是否將 ContextLab 商業化
- 增加 Services 頁
- 增加 Case Studies 頁
- 建立顧問服務流程
- 建立報價與導入範本
- 協助其他企業建立內部系統

成果：

- ContextLab 可作為對外顧問品牌
- 具備完整作品集與方法論
- 可提供企業知識庫、AI Agent、內部系統建置服務

---

## 14. 風險分析

### 14.1 品牌重疊風險

風險：

ContextLab 這個名稱在國際上已有其他 AI 相關品牌使用，未來若商業化可能產生品牌混淆或商標問題。

因應：

- 第一年先作為個人學習與實驗品牌
- 不急著投入大量商標、Logo、廣告成本
- 商業化前進行台灣與國際商標檢索
- 必要時將 ContextLab 定位為產品名稱，而非公司名稱

### 14.2 技術維護風險

風險：

若過早採用 WordPress、資料庫或自架主機，可能增加維護負擔。

因應：

- 第一版採 GitHub Pages + Hugo
- 不使用資料庫
- 不建立後台登入
- 動態功能留到第二階段

### 14.3 NAS 對外安全風險

風險：

直接使用 DDNS + Port Forward 對外開放 NAS，可能增加資安風險。

因應：

- 使用 Cloudflare Tunnel
- 不公開 DSM、SMB
- 僅公開必要 API 或 PWA
- API Key 與 Token 不放在前端或公開 repository

### 14.4 內容無法持續風險

風險：

網站架好後，如果寫作流程太麻煩，可能無法持續更新。

因應：

- 使用 Markdown
- 將學習筆記格式標準化
- 用 AI 協助整理筆記
- 不要求每篇文章一開始就完整
- 使用 Digital Garden 的 growing note 概念

### 14.5 平台綁定風險

風險：

若內容綁定單一平台，未來轉移困難。

因應：

- Markdown 作為內容核心
- GitHub 作為版本控管
- Cloudflare 管理 DNS
- 不把網域登記在網站公司名下

---

## 15. 待確認事項

### 15.1 網域

- contextlab.tw 是否已完成註冊
- 註冊人要使用個人名義或公司名義
- 是否購買 1 年或 3 年
- 是否需要同時保護 contextlab.com.tw 或其他變體

### 15.2 品牌

- ContextLab 是否只作為學習實驗室名稱
- 未來是否可能作為正式顧問品牌
- 是否需要商標檢索
- 是否需要設計 Logo 與品牌識別

### 15.3 技術

- Hugo 主題選擇
- GitHub repository 命名
- 是否使用 GitHub Actions 部署
- Cloudflare DNS 設定方式
- 是否需要 www 子網域

### 15.4 內容

- 第一批文章主題
- 分類與標籤規則
- 是否採用中英文雙語
- 是否公開所有學習紀錄
- 是否需要私人筆記與公開文章分流

### 15.5 未來系統

- DS923+ 上要使用哪種 API Server 技術
- 工程照片系統是否先做 PWA
- Notion Database ID 對應方式
- LINE Bot 是否列入第二階段
- AI Agent 使用 OpenAI、Gemini 或其他模型

---

## 16. 建議的下一步

### Step 1：完成網域購買

購買：

```text
contextlab.tw
```

建議買 3 年，並開啟自動續約、兩步驟驗證與網域鎖定。

### Step 2：建立 Cloudflare 帳號與 DNS

將 contextlab.tw 加入 Cloudflare，取得 Cloudflare nameserver，並回到註冊商設定 nameserver。

### Step 3：建立 GitHub Repository

建議 repository：

```text
contextlab-site
```

### Step 4：建立 Hugo 網站

建立第一版網站結構：

```text
Home
專案實作
知識庫
學習日誌
AI 工作流
建築與 BIM
影像筆記
關於我（含發展藍圖）
```

### Step 5：部署到 GitHub Pages

設定 GitHub Pages，確認：

```text
https://contextlab.tw
https://www.contextlab.tw
```

可正常開啟。

### Step 6：建立第一批內容

建議先寫 5 篇：

1. 為什麼開始 ContextLab
2. Cloudflare Tunnel 與 NAS 架構筆記
3. GitHub Pages + Hugo 架站紀錄
4. AI 如何協助建立企業知識庫
5. 工程照片系統的初步構想

---

## 17. 成功指標

### 17.1 一個月內

- 網域完成註冊
- GitHub Pages 網站上線
- Cloudflare DNS 完成
- 至少 3 篇文章

### 17.2 三個月內

- 至少 10 篇文章
- 至少 3 個 Projects 頁
- 建立固定文章模板
- 首頁與 About 頁完整

### 17.3 一年內

- 至少 30 篇文章
- 至少 5 個實作專案
- 建立 ContextLab Knowledge Base
- 初步形成 AI + 建築 + 知識管理的方法論

---

## 18. 結論

ContextLab 第一年的最佳定位不是商業顧問公司，而是學習紀錄、知識實驗室與作品集。

建議採用：

```text
contextlab.tw
Cloudflare DNS
GitHub Pages
Hugo
Markdown
```

未來再逐步擴充：

```text
Cloudflare Tunnel
DS923+ NAS
Photo API
PWA
Notion
LINE Bot
AI Agent
```

這樣可以用最低成本開始累積內容，同時保留未來升級為企業知識管理與 AI 顧問品牌的彈性。
