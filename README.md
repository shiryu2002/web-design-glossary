# WEBデザイン用語ビジュアル辞典

AIにWEBデザインを指示するとき、「あの効果なんだっけ」と用語が思い出せない問題を解決するためのレファレンスサイト。各用語を「名前 + 実際の動き」のセットで覚えられる。

- 総数: **390 用語** / 6 ジャンル（認知心理学・アニメ・レイアウト・フォント・カラー&スタイル・UIパーツ）
- カード上で常時実演 + クリックで拡大モーダル + Before/After トグル
- 日本語名 + 英語名併記
- 検索バーで全用語横断検索（日本語/英語/説明文）

## 起動

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 型チェック + 本番ビルド
```

## 用語一覧と内部構造

**全用語のカタログは [TERMS.md](./TERMS.md) を参照。** Claudeなどに作業を依頼する前に、まずこのファイルを開いて構造を把握すること。

**Demoコンポーネントの実装ルールは [DESIGN.md](./DESIGN.md) を参照。** 新規Demo追加や複数Demo一括実装をサブエージェントに依頼するときの共通仕様（CSS変数、テンプレート、サンプルコード、TypeScript制約、委託時のチェックリスト）をまとめている。

**新規用語の追加手順は [SUBMIT.md](./SUBMIT.md) を参照。** 未収録判定 → 実装 → terms.ts更新 → ビルド → push までの一連のフロー。Claudeに「SUBMIT.md見て進めて」と一言で指示すれば自走可能。

**Claudeが作業を始める前の索引は [CLAUDE.md](./CLAUDE.md) を参照。** プロジェクト構造と各ドキュメントの役割をまとめている。

技術スタック:
- Vite + React 18 + TypeScript
- CSS Modules（外部UI・アニメーションライブラリは未使用）

主要ファイル:
- `src/App.tsx` — 画面ロジック（タブ・検索・グリッド・モーダル）
- `src/data/terms.ts` — 全用語の定義（TERMS配列）
- `src/types.ts` — Term型とCategory型
- `src/components/demos/<category>/<Name>Demo.tsx` — 各用語の実演コンポーネント

## 用語を追加するには

1. `src/components/demos/<category>/<Name>Demo.tsx` と `<Name>Demo.module.css` を作る
2. `src/data/terms.ts` の `TERMS` 配列に追加（importも）
3. [TERMS.md](./TERMS.md) のテーブルに行を足す
4. `npm run build` で型エラーがないか確認

詳しい型定義と追加候補リストは [TERMS.md](./TERMS.md) を参照。
