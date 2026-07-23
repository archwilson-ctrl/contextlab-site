# ContextLab Hugo Site

這是 ContextLab 的 Hugo 主站，和原本 Vercel Blog 專案分開管理。

## 資料夾用途

```text
contextlab-hugo-site/
├── content/   # 網站內容，會發布到正式網站
├── docs/      # 內部專案文件，不會公開發布
├── layouts/   # Hugo 版型
├── assets/    # CSS、圖片等網站資源
├── public/    # Hugo 產生的靜態網站，不需要手動編輯
└── hugo.toml  # Hugo 網站設定
```

## 常用指令

先打開 PowerShell，進入 Hugo 主站資料夾：

```powershell
cd "C:\Users\archw\Documents\Codex projects\Context Lab\contextlab-hugo-site"
```

啟動本機預覽：

```powershell
..\tools\hugo\hugo.exe server
```

啟動後，用瀏覽器打開：

```text
http://localhost:1313/
```

如果 `localhost` 打不開，也可以試：

```text
http://127.0.0.1:1313/
```

停止預覽：

```text
在 PowerShell 視窗按 Ctrl + C
```

正式產生靜態網站：

```powershell
..\tools\hugo\hugo.exe
```

產生結果會放在：

```text
public/
```

## 上線到 GitHub Pages

這個專案使用 GitHub Actions 自動部署 Hugo 網站。

部署設定檔在：

```text
.github/workflows/hugo.yaml
```

自訂網域設定檔在：

```text
static/CNAME
```

目前設定的正式網域是：

```text
contextlab.tw
```

第一次上線前，請確認 GitHub repository：

```text
Settings → Pages → Source → GitHub Actions
```

然後把本機檔案推到 GitHub：

```powershell
git status
git add .
git commit -m "Set up Hugo GitHub Pages deployment"
git push
```

推上去後，到 GitHub：

```text
Actions
```

查看 `Deploy Hugo site to GitHub Pages` 是否成功。

## 更新網站流程

每次新增或修改文章後：

```powershell
cd "C:\Users\archw\Documents\Codex projects\Context Lab\contextlab-hugo-site"
..\tools\hugo\hugo.exe server
```

在本機確認畫面正常後，停止預覽：

```text
Ctrl + C
```

接著提交並推送：

```powershell
git status
git add .
git commit -m "Update site content"
git push
```

GitHub Actions 會自動重新建置並更新正式網站。

## 內容管理

新增學習紀錄：

```text
content/learning-log/
```

新增專案頁：

```text
content/projects/
```

新增知識庫文章：

```text
content/knowledge/
```

新增 AI 工作流程：

```text
content/workflows/
```

新增建築與 BIM 筆記：

```text
content/construction/
```

新增影像筆記：

```text
content/photography/
```

## 文件管理

專案規格書放在：

```text
docs/ContextLab_PRD.md
```

`docs/` 裡的文件是給自己看的專案文件，不會被 Hugo 當成網站頁面發布。

## 網站分工

```text
contextlab.tw
→ GitHub Pages + Hugo
→ 主站、學習紀錄、知識庫、作品集

lab.contextlab.tw
→ Vercel
→ 互動工具、AI Demo、前端實驗

api.contextlab.tw / photo.contextlab.tw
→ 未來 Cloudflare Tunnel + NAS
→ API Server、PWA、工程照片系統
```
