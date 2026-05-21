# プロジェクトメモ（Claude向け）

WEBデザイン用語ビジュアル辞典のリポジトリ。Vite + React + TypeScript + CSS Modules で構築。GitHub Pages で公開中: https://shiryu2002.github.io/web-design-glossary/

このファイルは Claude が作業を開始する前に最初に読むべき索引。**用途に応じて以下のドキュメントを開いてから着手すること。**

## ドキュメント一覧と読むタイミング

| ファイル | 役割 | 読むタイミング |
|---|---|---|
| [README.md](./README.md) | プロジェクト概要・起動方法・技術スタック | 何のプロジェクトか把握したいとき |
| [TERMS.md](./TERMS.md) | 全用語の一覧（カテゴリ別テーブル） | 「何が登録されているか」を確認するとき／未収録の用語を判断するとき |
| [DESIGN.md](./DESIGN.md) | Demoコンポーネントのコード規約 | 新しいDemoを実装するとき／サブエージェントに委託するとき |
| [SUBMIT.md](./SUBMIT.md) | 新規用語追加の手順書（未収録判定→実装→公開までのフロー全体） | 用語を追加する作業全体の流れを把握したいとき |

## 典型的な作業パターン

### パターン1: 新規用語の追加
ユーザーから「X を追加して」「未収録を挙げて追加して」と指示があった場合:
1. [SUBMIT.md](./SUBMIT.md) を開く（手順全体のガイド）
2. SUBMIT.md の指示に従って TERMS.md（既存リスト確認）と DESIGN.md（コード規約）を参照
3. SUBMIT.md の Step 1〜7 を順に実行

### パターン2: 既存Demoの修正
1. [DESIGN.md](./DESIGN.md) の「CSS Modules ルール」「既存サンプル」を参照してスタイル統一を保つ
2. 修正後は `npm run build` で型エラー確認
3. 必要なら dev サーバーで目視確認

### パターン3: カテゴリの追加・整理
1. `src/types.ts` の `Category` 型と `CATEGORIES` 配列を更新
2. `src/App.tsx` の counts 初期化に新カテゴリを追加
3. `src/data/terms.ts` の用語の `category` フィールドを必要に応じて変更
4. TERMS.md のカテゴリ表・各セクション見出しを更新
5. ビルド確認

## このプロジェクト固有のルール

- **コミット・push はユーザー指示があるまで実行しない**（グローバルCLAUDE.mdに準拠）
- **main 直 push 運用**: ブランチ運用はしていない。push すると即 GitHub Actions が動いて Pages にデプロイされる
- **dev サーバー**: ユーザーがバックグラウンドで起動していることが多い。HMR で自動反映されるので、必ずしも明示再起動は不要
- **大量実装は並列サブエージェント推奨**: 30個以上のDemoを一気に作る場合は、カテゴリ別に Agent ツールで並列起動する（DESIGN.md の委託指針を全エージェントに渡す）
- **「タイポ&カラー」は2カテゴリに分離済み**: `font`（書体・組版）と `typography`（色・スタイル）。ファイル配置上は両方とも `src/components/demos/typography/` に同居している（`category` フィールドだけで区別）
- **Z-Pattern / F-Pattern のDemoファイル位置**: `src/components/demos/layout/` にあるが、`category` は `'cognitive'`。importパスとカテゴリが食い違うので注意

## 用語の現状（参考）

390 用語 / 6 ジャンル（変動するので正確な数値は [TERMS.md](./TERMS.md) を確認）:
- 認知心理学 / アニメーション / レイアウト / フォント / カラー&スタイル / UIパーツ

## 困ったとき

- 用語数や構造が分からない → [TERMS.md](./TERMS.md)
- Demoの書き方が分からない → [DESIGN.md](./DESIGN.md)
- 全体フローが分からない → [SUBMIT.md](./SUBMIT.md)
- ビルドが通らない → DESIGN.md の「TypeScript の制約」を確認、`tsc -b` を直接実行してエラー内容を見る
