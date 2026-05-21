# Demo 実装の共通仕様

このファイルは「Demoコンポーネントを実装するときの統一ルール」をまとめたもの。サブエージェントや別の開発者に作業を委託する際は、このファイルへのリンクを共有すれば前提を揃えられる。

新しい用語のDemoを追加する手順は [TERMS.md](./TERMS.md) を参照。本ファイルは「**1つのDemoをどう書くか**」のルールに特化。

---

## ファイル配置

- `src/components/demos/<category>/<Name>Demo.tsx`
- `src/components/demos/<category>/<Name>Demo.module.css`
- `category` は次のいずれか: `cognitive` / `animation` / `layout` / `font` / `typography` / `component`
  - 注: `font` と `typography` のカテゴリは、ファイル配置上は両方とも `typography/` ディレクトリにまとめている（`category` フィールドだけで分けている）

`<Name>` は PascalCase（例: `PulseDemo`, `GestaltCommonFateDemo`）。命名は英語名から派生させる。

---

## TypeScript 型

`src/types.ts` で定義済み。

```ts
export type DemoProps = {
  mode?: 'before' | 'after';
};
```

すべてのDemoコンポーネントはこの型のpropsを受ける。

---

## Demoコンポーネントのテンプレート

### 単一表示（mode を使わない）

```tsx
import type { DemoProps } from '../../../types';
import styles from './XxxDemo.module.css';

export function XxxDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {/* 実演内容 */}
    </div>
  );
}
```

`mode` を使わない場合は `_: DemoProps` で受ける。`noUnusedParameters` が有効なので、変数名を `_` にして未使用警告を回避する。

### Before / After 対応

```tsx
import type { DemoProps } from '../../../types';
import styles from './XxxDemo.module.css';

export function XxxDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.applied : styles.plain;
  return (
    <div className={styles.stage}>
      <div className={cls}>...</div>
    </div>
  );
}
```

`hasBeforeAfter: true` の用語のみ Before/After を実装する。`terms.ts` の Term 定義で必ず `hasBeforeAfter` を正しく設定すること。

### React state を使う

インタラクションが必要な場合のみ `useState` を許可。

```tsx
import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './XxxDemo.module.css';

export function XxxDemo(_: DemoProps) {
  const [open, setOpen] = useState(false);
  // ...
}
```

`useEffect` は基本的に不要。アニメーションは CSS の `@keyframes` で完結させる。

---

## CSS Modules ルール

### ルートクラスは必ず `.stage`

```css
.stage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

カードStage領域は約 **240×160 px**（カード表示時）、約 **600×280 px**（モーダル拡大時）に伸縮する。内容は flex / grid で中央配置を基本にする。

### グローバルCSS変数（`src/index.css` で定義済み）

そのまま `var(--xxx)` で使える。

```css
--bg          : #f6f4ef    /* 全体背景 */
--surface     : #ffffff    /* カード/パネル */
--border      : #e6e2d8    /* 罫線 */
--text        : #221f1c    /* 本文 */
--text-sub    : #6b6660    /* キャプション・補足 */
--accent      : #5b4ee3    /* 強調色（紫） */
--accent-soft : #ecebfd    /* 強調色の薄色 */

--shadow-sm   : 0 1px 2px rgba(20, 18, 16, 0.05)
--shadow-md   : 0 4px 14px rgba(20, 18, 16, 0.08)
--shadow-lg   : 0 18px 48px rgba(20, 18, 16, 0.18)

--radius-sm   : 8px
--radius-md   : 12px
--radius-lg   : 18px
```

ハードコード色は避けて、極力CSS変数を使う。Demo固有の色（例: ヒートマップの緑、エラーの赤）はインラインで OK。

### フォントサイズ規約

- タイトル類: 18〜32px
- 本文・ボタン: 11〜14px
- ラベル・補足: 8〜10px

カード時の縮小表示でも読めるように、小さめサイズを基本にする。

### アニメーション

- `@keyframes` は 1〜2 秒のループ
- `transition` は 0.15〜0.3s が基本
- `cursor` や `mix-blend-mode` も自由に使ってよい

### 装飾の方針

- 装飾は控えめに、用語の本質が分かる最小限の表現
- 第三者ライブラリ（framer-motion / lottie / chart.js 等）は使わない
- 純粋な React + CSS Modules + インライン SVG のみ

---

## 既存サンプル（手本になる Demo）

### シンプルなアニメ系: `PulseDemo`

```tsx
// src/components/demos/animation/PulseDemo.tsx
import type { DemoProps } from '../../../types';
import styles from './PulseDemo.module.css';

export function PulseDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.pulse : '';
  return (
    <div className={styles.stage}>
      <div className={`${styles.dot} ${cls}`} />
    </div>
  );
}
```

```css
/* PulseDemo.module.css */
.stage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent);
}
@keyframes pulseRing {
  0% { box-shadow: 0 0 0 0 rgba(91, 78, 227, 0.5); }
  100% { box-shadow: 0 0 0 30px rgba(91, 78, 227, 0); }
}
.pulse {
  animation: pulseRing 1.6s ease-out infinite;
}
```

### Before/After 切替: `KerningDemo`

```tsx
import type { DemoProps } from '../../../types';
import styles from './KerningDemo.module.css';

export function KerningDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.tight : styles.loose}>
        DESIGN
      </div>
    </div>
  );
}
```

### state を使うインタラクション系: `RippleDemo`

```tsx
import { useState, useRef } from 'react';
import type { DemoProps } from '../../../types';
import styles from './RippleDemo.module.css';

export function RippleDemo(_: DemoProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const nextId = useRef(0);

  const spawn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = nextId.current++;
    setRipples((rs) => [...rs, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((rs) => rs.filter((r) => r.id !== id)), 700);
  };

  return (
    <div className={styles.stage}>
      <button className={styles.btn} onClick={spawn}>クリックして！</button>
    </div>
  );
}
```

---

## TypeScript の制約

`tsconfig.json` で以下が有効。

- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`

つまり:

- 使わない import は禁止
- 使わない変数・引数は `_` で受ける
- import は `import type { DemoProps } from '../../../types';` のみが基本

CSS Modules の型は `src/vite-env.d.ts` で宣言済み（`*.module.css` を default export として扱える）。

---

## サブエージェントへの委託

40個 × 2ファイル のような大量のDemo実装をサブエージェントに委託するときは、以下を **必ず** プロンプトに含める:

1. **作業場所**: 該当カテゴリのディレクトリのみに限定
   - 例: `src/components/demos/animation/` のみ。他カテゴリは触らない
2. **terms.ts と App.tsx は触らない**: 統合は後で手動でやるため
3. **既存ファイルは触らない**: 上書き事故防止
4. **このDESIGN.mdの「Demoコンポーネントのテンプレート」「CSS Modulesルール」「既存サンプル」セクションをコピペで渡す**
5. **実装する用語のリスト**: ファイル名 / 英名 / 日本語名 / 何を見せるか / mode対応の有無
6. **TypeScript 制約**: noUnusedLocals/noUnusedParameters のことを明示
7. **npm / git / インストールコマンドは禁止**: エージェントは Write のみで完結させる

---

## カテゴリ別の表示の傾向（参考）

| カテゴリ | 表現の傾向 |
|---|---|
| `cognitive` | 概念図・矢印・ハイライト・対比2画面。色は控えめでアクセント色を1〜2点。 |
| `animation` | `@keyframes` 中心。ループする小さな動きで「名前と動きを結びつける」ことに集中。 |
| `layout` | 矩形・グリッドの簡略ワイヤーフレーム。塗りは灰色＋アクセント色1点。 |
| `font` | 文字をそのまま大きく表示。Before/After で字形・字間を比較。 |
| `typography` (カラー&スタイル) | 色面・装飾・写真風グラデーション。スタイルそのものを伝える。 |
| `component` | UIパーツの簡略再現。実物の見た目に寄せる。 |

---

## 用語追加の最終チェックリスト

新しいDemoを追加したら必ず確認:

- [ ] `.tsx` と `.module.css` の2ファイル両方ある
- [ ] ファイル名と関数名が一致（`PulseDemo.tsx` の中身は `export function PulseDemo`）
- [ ] `.stage` ルートクラスがある
- [ ] `mode` を使わない場合は `_: DemoProps` で受けている
- [ ] `terms.ts` に import 追加
- [ ] `terms.ts` の `TERMS` 配列にエントリ追加（`hasBeforeAfter` の値が実装と一致）
- [ ] `TERMS.md` のテーブルに行を追加
- [ ] `npm run build` で型エラー・ビルドエラーが出ない
