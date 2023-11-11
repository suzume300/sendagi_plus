# sendagi_plus

## 事前準備

- `npm` のインストール: https://www.npmjs.com/
- 関連ライブラリのインストール
  - `$ npm install`

## ウェブサイトのプレビュー

```
$ npm run dev
```

## ウェブサイトの公開・更新

[AstroサイトをGitHub Pagesにデプロイする 🚀 Astroドキュメント](https://docs.astro.build/ja/guides/deploy/github/)

## 設定

- スタイル: `src/assets/global.css`
- サイトのタイトル、概要: `src/sites.ts`
- サイトのURL: `astro.config.ts`

## ページの追加

- `src/content/articles/` フォルダに、新しいテキストファイルを作成
  - 例: `2023-11-11.mdx`
- メタ情報を記載
  - `title`
  - `pubDate`
  - `description`
  - `image.src`, `image.alt`
- 画像を `public/images/` に追加
- 本文を記述
