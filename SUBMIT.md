# 新規用語追加の手順書

clearした新しい会話で「SUBMIT.md を見て進めて」と一言指示するだけで、未収録用語の選定〜実装〜公開まで自走できるようにした手順書。

## 関連ファイル

| ファイル | 役割 |
|---|---|
| [TERMS.md](./TERMS.md) | 既存収録用語の一覧。未収録判定のソース。 |
| [DESIGN.md](./DESIGN.md) | Demoコンポーネントのコード規約。実装中に参照。 |
| `src/data/terms.ts` | TERMS配列（用語データ本体）。追加対象。 |

このSUBMIT.mdは「**いつ・何を・どの順で・どうやって**」を、TERMS.mdとDESIGN.mdは「**何があるか・どう書くか**」を担う。

---

## Step 1: 未収録の用語を見つける

### 既存リストの読み方

[TERMS.md](./TERMS.md) を開き、各カテゴリのテーブルから「英語名」列をスキャンする。これが現時点の収録済みリスト。重複は **英語名で照合**（日本語名はバリエーションがある）。

### ジャンル判定基準

ユーザーから明示指定がない場合は、以下で判定する。

| カテゴリ | 何を入れるか |
|---|---|
| `cognitive` | 認知心理学・行動経済学・UX法則・認知バイアス（例: Fitts's Law, IKEA Effect） |
| `animation` | CSS の `@keyframes` で 1〜2 秒ループ実演できる動き（例: Pulse, Bounce） |
| `layout` | ページ構造・グリッド・セクション類型（例: Hero, Sidebar, Card Grid） |
| `font` | 書体・組版・文字配置（カラー要素少なめ。例: Kerning, Serif, X-height） |
| `typography` | 色・装飾効果・ビジュアルスタイル（例: Gradient, Glassmorphism, Y2K） |
| `component` | 操作可能なUI部品（例: Modal, Slider, Date Picker） |

迷ったとき:
- 「動き」が主眼 → animation
- 「形・配置」が主眼 → layout
- 「色・質感」が主眼 → typography
- 「操作できる部品」が主眼 → component
- 「人間の認知特性に依存する原則」 → cognitive

### 数の目安

ユーザー指定があればそれに従う。指定がなければ:
- **5〜10個**を候補として挙げて確認を取る
- 「全部追加して」と明示指示があれば全件
- 大量追加（30個以上 / 1カテゴリ）はサブエージェントの並列実装を検討（DESIGN.mdの委託指針参照）

### 候補の出し方

- 業界知識から想起
- WebSearch で `<category> design patterns` や `UX laws list` などを検索
- ユーザーから指定された用語

---

## Step 2: Demoコンポーネントを実装

[DESIGN.md](./DESIGN.md) の以下を参照しながら実装:

- 「Demoコンポーネントのテンプレート」
- 「CSS Modulesルール」（`.stage` クラス、CSS変数）
- 「既存サンプル」（PulseDemo / KerningDemo / RippleDemo）

ファイル配置:
- `src/components/demos/<category>/<Name>Demo.tsx`
- `src/components/demos/<category>/<Name>Demo.module.css`

**大量実装するときはサブエージェントに委託**。DESIGN.md の「サブエージェントへの委託」セクションのチェックリスト7項目をプロンプトに含める。並列で `Agent` ツールを起動して、カテゴリ別に分担させる。

---

## Step 3: `src/data/terms.ts` に追加

import 行を該当ジャンルセクションの末尾に追加:

```ts
// アニメーション
// ...既存のimport
import { HoverRevealDemo } from '../components/demos/animation/HoverRevealDemo';
import { YourNewDemo } from '../components/demos/animation/YourNewDemo';  // ← 追加
```

TERMS 配列エントリを該当ジャンルセクションの末尾に追加:

```ts
  { id: 'hover-reveal', nameJa: 'ホバーリビール', nameEn: 'Hover Reveal', category: 'animation',
    description: 'ホバー時にカード上にオーバーレイが現れて詳細を表示する演出。',
    Demo: HoverRevealDemo, hasBeforeAfter: false },
  { id: 'your-new', nameJa: '新しい用語', nameEn: 'Your New Term', category: 'animation',  // ← 追加
    description: '1〜2文の説明。AIへの指示で使う観点で書く。',
    Demo: YourNewDemo, hasBeforeAfter: false },
```

注意:
- `id` は kebab-case、ユニーク（既存と被らないこと）
- `category` は `'cognitive' | 'animation' | 'layout' | 'font' | 'typography' | 'component'` のいずれか
- `description` は 1〜2 文、句点で終わる
- `hasBeforeAfter` は Demoコンポーネントの実装と一致させる（before モード対応してたら true）
- `Demo:` の値は import した関数名そのまま

---

## Step 4: TERMS.md に追加

該当ジャンルのテーブル末尾に行を追加:

```markdown
| Your New Term | 新しい用語 | 1文の説明 |
```

冒頭の総数を更新:

```markdown
- 総数: **XXX 用語** / 6 ジャンル
```

カテゴリ表の用語数も更新:

```markdown
| `animation` | アニメーション | Animation | XX |
```

各ジャンル見出しの数字も:

```markdown
## アニメーション / Animation（XX 用語）
```

---

## Step 5: ビルド確認

```bash
cd /home/wsl-user/workspace/private/study/design-term
npm run build
```

期待される出力:
```
✓ XXX modules transformed.
✓ built in X.XXs
```

エラーが出たら:
- `tsc -b` エラー → import パスのタイポ、未使用変数（`noUnusedLocals` / `noUnusedParameters`）
- Vite エラー → CSS構文エラー、`.module.css` のクラス名と tsx の参照名のミスマッチ

---

## Step 6: dev サーバーで目視確認（推奨）

すでに起動中の dev サーバーがあれば HMR で自動反映。なければ:

```bash
npm run dev
# http://localhost:5173 をブラウザで開く
```

確認項目:
- 該当ジャンルタブをクリック
- 追加した用語のカードが表示される
- カード上でDemoが正しく動く（アニメーション・色・配置）
- カードをクリックしてモーダルが開く
- `hasBeforeAfter: true` の用語は Before/After トグルが表示され、切り替えで見た目が変わる
- 検索バーで日本語名・英語名で検索してヒットする

---

## Step 7: コミット & push

```bash
cd /home/wsl-user/workspace/private/study/design-term
git status        # 追加・変更ファイル確認
git add .
git commit -m "$(cat <<'EOF'
Add N terms to <category>: Term1 / Term2 / ...

- どんな用語を追加したか1〜2行で
- 数とジャンルを明記

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
git push
```

push後、GitHub Actions が自動で:
1. `npm ci` + `npm run build`
2. `dist/` を GitHub Pages にデプロイ

→ https://shiryu2002.github.io/web-design-glossary/ で公開される（反映まで30秒〜2分）

ワークフロー状況の確認:
```bash
gh run list --repo shiryu2002/web-design-glossary --limit 3
```

---

## 完了チェックリスト

実装が終わったら以下を全て満たすこと:

- [ ] Demoコンポーネントの `.tsx` と `.module.css` が両方ある
- [ ] `src/data/terms.ts` の import と TERMS 配列の両方に追加した
- [ ] TERMS.md のテーブル・カテゴリ表・ジャンル見出しの数字を更新した
- [ ] `npm run build` がエラーなく完了する
- [ ] dev サーバーでカードとモーダルの見た目を確認した
- [ ] `git push` した
- [ ] GitHub Actions がデプロイ成功した（`gh run list` で確認）

---

## 重要な制約

CLAUDE.md ルール（個人ルール）:
- `git commit` / `git push` はユーザーが明示的に指示しない限り実行しない
- `git config` は更新しない
- main ブランチへの直接コミットは要確認

このサイトは main 直 push 運用なので、ユーザーが Step 7 を実行する指示を出してから push する。指示前は Step 6 までで止まって報告する。
