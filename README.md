# Yuya Yokouchi — GitHub Pages (Vite + React + TS)

GitHub Pages の **ユーザーサイト**（リポジトリ名: `tatesoto.github.io`）で公開する、Vite + React + TypeScript のポートフォリオ。
- Tailwind（`darkMode: 'class'`）で**ダーク/ライト切替**
- シンプルな **i18n 切替（JA/EN）**
- React Router で**複数ページ**
- VS Code **DevContainer** 対応（Node 20）
- GitHub Actions で **main への push で自動デプロイ**

## 1) セットアップ

1. このプロジェクトを `tatesoto.github.io` という名前で GitHub に作成（ユーザーサイトの必須要件）
2. ローカル（WSL/Ubuntu）か DevContainer で：
   ```bash
   npm install
   npm run dev
   ```

## 2) デプロイ（GitHub Pages）

- すでに `.github/workflows/pages.yml` を配置済み。`main` ブランチへ push すると自動ビルド・公開されます。
- リポジトリの **Settings → Pages** で、"Build and deployment" を **GitHub Actions** に設定してください。

> SPA ルーティングの 404 対応のため、`index.html` と同内容の `404.html` をコミットしています。

## 3) 開発メモ
- ページは `src/pages/` にあり、ルーティングは `App.tsx` を参照
- ナビの文言やヒーロー見出しは `src/i18n.tsx` の辞書から
- テーマ切替は `src/theme.tsx`（`localStorage` に `theme` を保存）
- 履歴書 PDF のリンクは `src/pages/Home.tsx` 内の URL を差し替えてください

## 4) コマンド
```bash
npm run dev      # 開発
npm run build    # 本番ビルド（dist/）
npm run preview  # ビルド結果のローカルプレビュー
npm run lint     # ESLint
npm run format   # Prettier
```

## 5) よくある質問
- **独自ドメインは？** → 後から `CNAME` を追加すればOK（このテンプレには含めていません）
- **English 版の本文は？** → まずはナビ/ヒーローのみ。本文は `src/pages` を複製して `lang` で条件分岐等で拡張可能。
- **ベースパスは？** → ユーザーサイトなので `vite.config.ts` の `base: '/'` 固定でOK。