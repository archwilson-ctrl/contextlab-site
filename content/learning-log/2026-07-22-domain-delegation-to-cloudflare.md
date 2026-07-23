---
title: "把 contextlab.tw 交給 Cloudflare 管理"
date: 2026-07-22
updated: 2026-07-22
tags: ["ContextLab", "DNS", "Cloudflare", "HiNet", "GitHub Pages"]
categories: ["Learning"]
status: "seed"
summary: "釐清 DNS 紀錄與 Nameserver 的差異，並成功將 contextlab.tw 從 HiNet 委派到 Cloudflare。"
---

今天主要處理 `contextlab.tw` 的網域代管設定。

一開始看到的是 HiNet 的 DNS 紀錄列表，畫面中是 A、CNAME、MX 這類 DNS 紀錄，而不是修改 Nameserver 的地方。因此先沒有新增任何 DNS 資料，避免把「DNS 紀錄」和「DNS 主機」混淆。

接著查看 HiNet 的說明文件，找到「如何設定網域名稱由外部 DNS 代管」的說明，確認 HiNet 支援把網域交給外部 DNS 服務，例如 Cloudflare。

後來也透過 Q8 確認，如果使用的是外部 Nameserver，只需要填入 DNS/HOST Server Name，IP Address 和 IPv6 Address 可以留空。

因此在 HiNet 的「更新 DNS 主機」頁面中，將 Nameserver 設定為：

```text
alaric.ns.cloudflare.com
keira.ns.cloudflare.com
```

其他欄位保持空白。送出後，Cloudflare 顯示「您的網域現在受到 Cloudflare 保護」，代表 `contextlab.tw` 已經成功委派到 Cloudflare，網域代管設定完成。

今天的重點是先釐清 DNS 紀錄和 Nameserver 的差異，再成功把 `contextlab.tw` 從 HiNet 交由 Cloudflare 管理。

下一步是建立網站內容、設定 GitHub Pages，並在 Cloudflare 補上 `contextlab.tw` 和 `www.contextlab.tw` 的 DNS 紀錄，讓網站正式上線。
