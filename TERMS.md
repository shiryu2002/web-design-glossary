# WEBデザイン用語ビジュアル辞典 - 全用語一覧

このサイトに収録されているWEBデザイン用語の一覧。AIへの指示で使うときの「正式名称」リファレンス。

- 総数: **390 用語** / 6 ジャンル
- 各用語の実演デモは `src/components/demos/<category>/<Name>Demo.tsx` にある
- データソース: `src/data/terms.ts`

## ファイル構成

```
study/
├── TERMS.md                       ← このファイル（用語一覧）
├── README.md                      ← プロジェクト概要
├── src/
│   ├── App.tsx                    ← メイン画面（タブ + 検索 + グリッド）
│   ├── types.ts                   ← Term型 / Category型 / CATEGORIES定数
│   ├── data/terms.ts              ← 全用語の定義（TERMS配列）
│   └── components/
│       ├── Tabs.tsx               ← ジャンルタブ
│       ├── SearchBar.tsx          ← 検索バー
│       ├── TermGrid.tsx           ← カードのグリッド
│       ├── TermCard.tsx           ← 1用語のカード（カード上で常時実演）
│       ├── TermModal.tsx          ← クリックで開く詳細モーダル
│       └── demos/
│           ├── cognitive/*.tsx    ← 認知心理学系Demoコンポーネント
│           ├── animation/*.tsx    ← アニメ系
│           ├── layout/*.tsx       ← レイアウト系
│           ├── typography/*.tsx   ← フォント系 + カラー&スタイル系（fontとtypographyのカテゴリ両方を含む）
│           └── component/*.tsx    ← UIパーツ系
```

> 注: Z-Pattern / F-Pattern は元々 layout カテゴリだったが、認知心理学カテゴリへ移動済み。Demoファイル本体は `src/components/demos/layout/` に残しているため、terms.ts の import パスは `layout/` を指している。

## カテゴリ

| ID | 日本語 | 英語 | 用語数 |
|---|---|---|---|
| `cognitive` | 認知心理学 | Cognitive Psychology | 58 |
| `animation` | アニメーション | Animation | 84 |
| `layout` | レイアウト | Layout | 75 |
| `font` | フォント | Typography | 38 |
| `typography` | カラー&スタイル | Color & Style | 42 |
| `component` | UIパーツ | UI Components | 93 |

## 用語データ構造（`src/types.ts`）

```ts
type Term = {
  id: string;                    // kebab-case (例: 'fade-in')
  nameJa: string;                // 日本語名
  nameEn: string;                // 英語名
  category: Category;            // 'cognitive' | 'animation' | 'layout' | 'font' | 'typography' | 'component'
  description: string;           // 1〜2文の説明
  Demo: ComponentType<{ mode?: 'before' | 'after' }>;
  hasBeforeAfter: boolean;       // モーダルでBefore/Afterトグルを出すか
};
```

## 新しい用語を追加する手順

1. `src/components/demos/<category>/<Name>Demo.tsx` と `<Name>Demo.module.css` を作成
2. `src/data/terms.ts` の `TERMS` 配列に追加（importも忘れず）
3. `TERMS.md` のテーブルに追加（このファイル）
4. `npm run build` で型エラーがないか確認

---

## 認知心理学 / Cognitive Psychology（58 用語）

| 英語名 | 日本語名 | 説明 |
|---|---|---|
| Z-Pattern | Zパターン | 左上→右上→左下→右下とZ字に視線が動く |
| F-Pattern | Fパターン | F字に視線が動く（テキスト主体ページ） |
| Gutenberg Diagram | グーテンベルク図式 | 左上→右下の斜め視線（情報量の多いページ） |
| Gestalt: Proximity | ゲシュタルト: 近接 | 近いものはグループに見える |
| Gestalt: Similarity | ゲシュタルト: 類似 | 似た形/色のものは関連付けて見える |
| Gestalt: Closure | ゲシュタルト: 閉合 | 不完全な図形でも閉じた形に見える |
| Gestalt: Continuity | ゲシュタルト: 連続 | 連続するラインを一つの流れに見る |
| Gestalt: Figure-Ground | ゲシュタルト: 図と地 | 主役と背景を分離（ルビンの壺） |
| Fitts's Law | フィッツの法則 | ターゲットが大きく近いほど到達が速い |
| Hick's Law | ヒックの法則 | 選択肢が増えると判断時間が増える |
| Miller's Law | ミラーの法則 | 短期記憶は 7±2 項目 |
| Primacy & Recency Effect | 初頭効果・新近効果 | 最初と最後が記憶に残る |
| Jakob's Law | ヤコブの法則 | ユーザーは慣れたパターンを期待する |
| Aesthetic-Usability Effect | 美的ユーザビリティ効果 | 美しいUIは使いやすく感じる |
| Doherty Threshold | ドハティの閾値 | 400ms以内の応答で生産性が上がる |
| Peak-End Rule | ピークエンドの法則 | 体験はピークと終わりで評価される |
| Von Restorff Effect | フォン・レストルフ効果 / 隔離効果 | 周囲と異なるものは記憶に残る |
| Banner Blindness | バナーブラインドネス | 広告風の要素は無視される |
| Gestalt: Common Fate | ゲシュタルト: 共通運命 | 同じ方向に動く要素は1グループに見える |
| Gestalt: Symmetry | ゲシュタルト: 対称性 | 対称な要素は安定した1つの図形に見える |
| Gestalt: Prägnanz | ゲシュタルト: プレグナンツ | 複雑な形を最も単純な形として解釈する |
| Gestalt: Common Region | ゲシュタルト: 共通領域 | 同じ枠/背景に囲まれた要素は同じグループに見える |
| Gestalt: Uniform Connectedness | ゲシュタルト: 統一的連結 | 線で繋がれた要素は強くグループ化される |
| Tesler's Law | テスラーの法則 / 複雑性保存 | 不可避な複雑さはシステム側で吸収せよ |
| Postel's Law | ポステルの法則 / 堅牢性原則 | 入力には寛容に、出力には厳密に |
| Goal-Gradient Effect | 目標勾配効果 | 目標に近づくほどモチベーションが上がる |
| Zeigarnik Effect | ツァイガルニク効果 | 未完了タスクは記憶に残りやすい |
| Serial Position Effect | 系列位置効果 | リストの最初と最後が記憶に残る |
| Pareto Principle | パレートの法則 / 80-20 | ユーザーの80%は機能の20%しか使わない |
| Chunking | チャンキング | 情報を意味のある塊に分割すると記憶しやすい |
| Cognitive Load | 認知負荷 | ワーキングメモリ消費を最小化する |
| Inattentional Blindness | 非注意性盲目 | 注意の外にある変化は見えない |
| Change Blindness | 変化盲 | フェードや遷移で起きた変化に気付かない |
| Choice Overload | 選択肢過多 | 選択肢が多すぎると決定不能になる |
| Decoy Effect | おとり効果 | 第3の劣った選択肢で特定案の選択率が上がる |
| Anchoring Bias | アンカリング効果 | 最初に見た数字を基準に判断する |
| Framing Effect | フレーミング効果 | 同じ事実でも表現で印象が変わる |
| Loss Aversion | 損失回避 | 得る喜びより失う痛みが大きい（約2倍） |
| Endowment Effect | 保有効果 | 持っているものを過大評価する |
| Sunk Cost Fallacy | サンクコスト効果 | 既に投じたコストが惜しくて続けてしまう |
| IKEA Effect | IKEA効果 | 自分で作ったものに高い価値を感じる |
| Confirmation Bias | 確証バイアス | 既存の信念を補強する情報を選ぶ |
| Bandwagon Effect | バンドワゴン効果 | 多数派に従う心理 |
| Social Proof | 社会的証明 | 他人の行動を判断基準にする |
| Authority Bias | 権威バイアス | 専門家・有名ブランドの意見を重視する |
| Scarcity | 希少性原則 | 残り少ないものを欲しがる |
| Reciprocity | 返報性 | 与えられたら返したくなる |
| Commitment & Consistency | コミットメント・一貫性 | 小さなYESが大きなYESを引き出す |
| Curiosity Gap | キュリオシティギャップ | 情報の欠落が好奇心を生む |
| Picture Superiority Effect | 画像優位性効果 | テキストより画像のほうが記憶される |
| Affordance | アフォーダンス | 形状・見た目が操作可能性を示唆する |
| Signifier | シグニファイア | 操作可能性を明示する記号 |
| Mapping | マッピング / 自然な対応付け | コントロールと効果が空間的に対応する |
| Recognition over Recall | 認識 > 想起 | 思い出させず選ばせる（オートコンプリート等） |
| Mere Exposure Effect | 単純接触効果 | 接触回数が多いものを好ましく感じる |
| Center-Stage Effect | センターステージ効果 | 中央に置かれた選択肢が選ばれやすい |
| Law of Locality | 局所性の法則 | 関連情報・コントロールはその近くに置く |
| Selective Attention | 選択的注意 | 関心ある対象だけに集中する |

---

## アニメーション / Animation（84 用語）

| 英語名 | 日本語名 | 説明 |
|---|---|---|
| Parallax | 視差効果 | スクロールで背景と前景が異なる速度で動く |
| Fade In | フェードイン | 不透明度0→100%でじわっと現れる |
| Hover Lift | ホバーリフト | ホバーで影付きで持ち上がる |
| Ripple | 波紋エフェクト | クリック地点から円が広がる |
| Marquee | マーキー | 一方向に流れ続ける |
| Skeleton Loading | スケルトンローディング | 形状プレースホルダー＋シマー |
| Scroll Reveal | スクロールリビール | スクロールで滑り込んで現れる |
| Pulse | パルス | 中心から外へ広がる拍動 |
| Spin | スピン / 回転ローダー | 回り続けるリング |
| Typewriter | タイプライター | 一文字ずつ打ち込まれる |
| Bounce | バウンス | 上下に弾みながら動く |
| Shake | シェイク | 横にぶるぶる揺れる（エラー時） |
| Glitch | グリッチ | 故障風に文字がズレて光る |
| Reveal Mask | マスクリビール | 帯状マスクが横切って現れる |
| Wiggle | ウィグル | くねくね小さく回転 |
| Morph | モーフ / 形状変化 | 輪郭が滑らかに変形 |
| Stagger | ステガー / 順番アニメ | 時間差で複数要素が動き出す |
| Zoom | ズーム | 拡大しながら現れる |
| Slide In | スライドイン | 画面外から滑り込む |
| Flip Card | フリップカード | カードを3D回転して裏面を見せる |
| Magnetic | マグネティック | カーソルに引き寄せられる |
| Cursor Follow | カーソル追従 | カーソル位置に追従するオブジェクト |
| Counter Up | カウントアップ | 数字が0→目標値へカウント |
| Confetti | 紙吹雪 / コンフェッティ | 達成時の祝祭演出 |
| Page Transition | ページ遷移 | 装飾的なシーンチェンジ |
| Liquid Blob | 液体ブロブ | ぼかしの色塊が浮遊 |
| Path Animation | パスアニメーション / 線描画 | SVGの線が描かれる |
| Tilt | チルト / 3D傾き | マウス位置で3D傾斜 |
| Hover Glow | ホバーグロー | 周囲がぼんやり光る |
| Text Reveal | テキストリビール | 1文字ずつ下から立ち上がる |
| Skew | スキュー / 傾斜 | 斜めに歪ませる |
| Heartbeat | ハートビート / 鼓動 | 2回連続で拍動 |
| Jelly | ジェリー / スクイッシュ | ゼリーのように伸び縮み |
| Particle | パーティクル | 粒子が漂う・舞い上がる |
| Floating | フローティング | ふわふわ上下に漂う |
| Wave Text | ウェーブテキスト | 文字が波打つ |
| Color Cycle | カラーサイクル | 色が循環し続ける |
| Iris | アイリス / 円形ワイプ | 中央から円形に開閉 |
| Glow Pulse | グロウパルス | 発光のオーラが脈打つ |
| Easing Curve | イージング曲線 | linear/ease-in/ease-out などの加減速 |
| Smooth Scroll | スムーズスクロール | scroll-behavior:smoothの滑らか挙動 |
| Cascade | カスケード / 連鎖アニメ | 上から下へ滝のように順番に現れる |
| Spotlight | スポットライト | 円形に明るくしてフォーカス |
| Hover Reveal | ホバーリビール | ホバーで詳細オーバーレイが出る |
| Anticipation | アンティシペーション / 予備動作 | 本動作前に逆方向へわずかに動いて予告 |
| Squash & Stretch | スカッシュ＆ストレッチ | 押し込んで潰れ、離して伸びる弾性 |
| Follow Through | フォロースルー | 主要動作後に末端が遅れて揺れて止まる |
| Overshoot | オーバーシュート | 目標位置を通り過ぎてから戻る |
| Spring | スプリング | バネ物理で振動しながら収束する |
| Inertia | イナーシャ / 慣性 | 離した後も慣性で動き、摩擦で停止 |
| Rubber Band | ラバーバンド | スクロール端で引き伸ばされ離すと戻る |
| Snap | スナップ | 一定距離まで来ると目標位置に吸着 |
| Scrub | スクラブ | スクロールに動画再生のように同期 |
| Pin / Sticky Hold | ピンスティッキーホールド | 区間で要素を固定し内部アニメを進める |
| Horizontal Scroll Hijack | 横スクロールハイジャック | 縦スクロールを横方向に変換 |
| Sticky Stack | スティッキースタック | カードが次々と上に重なり積まれる |
| Shimmer | シマー | スケルトン上を斜めの光沢が走る |
| Progress Ring | プログレスリング | 円弧が時計回りに描かれ進捗率を表す |
| Number Roll | ナンバーロール | 数字桁が縦に回転して切り替わる |
| Text Scramble | テキストスクランブル | ランダム文字が高速切替で正しい文字に収束 |
| Split Text | スプリットテキスト | 文字/単語に分解しずらして動かす |
| Variable Font Morph | バリアブルフォントモーフ | ウェイト軸を連続変化させる |
| Underline Sweep | アンダーラインスイープ | ホバーで下線が左から右へ伸びる |
| Word Cycle | ワードサイクル | 単語が縦にスクロールして入れ替わる |
| Gradient Flow | グラデーションフロー | グラデーションの色相位置が流れる |
| Aurora | オーロラ | ぼかしカラーブロブが背景でゆらぐ |
| Grain Noise | グレインノイズ | 微細な粒子ノイズが揺らぐ |
| Caustics | コースティクス | 水面の光紋のような明暗パターン |
| Conic Sweep | コニックスイープ | コニックグラデーションがレーダー風に回転 |
| Halftone Dither | ハーフトーンディザ | 網点密度の変化で像が現れる |
| Ink Bleed | インクブリード | インクが紙にじむように広がる |
| Cross Dissolve | クロスディゾルブ | フェードアウトとフェードインが重なる遷移 |
| Push Slide | プッシュスライド | 旧コンテンツが押し出され新が流入 |
| Rotate In | ローテートイン | 回転しながら出現 |
| Long Press Hold | ロングプレスホールド | 長押しで進行リングが進む確認操作 |
| Swipe to Reveal | スワイプリビール | 横スワイプで隠れた操作が露出 |
| Pinch Zoom | ピンチズーム | 二本指で拡縮するジェスチャー |
| Drag Reorder | ドラッグリオーダー | ドラッグで周囲が押し退けられる並べ替え |
| Pull to Refresh | プルトゥリフレッシュ | 上端を引き下げて更新 |
| Tab Indicator Slide | タブインジケータスライド | アクティブ下線がスライド移動 |
| Marching Ants | マーチングアンツ | 選択範囲の点線が常時流れる |
| Caret Blink | キャレットブリンク | 入力カーソルの点滅 |
| Number Tick | ナンバーティック | 空港表示板風のパタパタ数字 |
| Success Check Draw | サクセスチェック描画 | チェックマークのストロークが描かれる |

---

## レイアウト / Layout（75 用語）

| 英語名 | 日本語名 | 説明 |
|---|---|---|
| Hero Section | ヒーローセクション | ページ最上部の大きなビジュアル |
| Bento Grid | ベントグリッド | 大小の長方形を組み合わせたお弁当箱風 |
| Masonry | メイソンリー | 石垣のように高さ違いを積む（Pinterest） |
| Sticky Header | スティッキーヘッダー | 画面上部に固定 |
| Split Screen | スプリットスクリーン | 画面を左右で大きく2分割 |
| Sidebar / Drawer | サイドバー / ドロワー | 横から出るメニュー |
| Holy Grail | 聖杯レイアウト | ヘッダー＋フッター＋3カラム |
| Asymmetric | 非対称レイアウト | 左右のサイズを意図的に変える |
| Full-bleed | フルブリード | 画面端いっぱい |
| Two-column | 2カラム | メイン＋サイドの2列 |
| Card Grid | カードグリッド | 同じ型のカードを格子状に |
| Grid System | 12カラムグリッド | 12分割の基準グリッド |
| Hamburger Menu | ハンバーガーメニュー | 3本線アイコンの開閉メニュー |
| Mega Menu | メガメニュー | ヘッダーから大きく開く複数列ナビ |
| Diagonal Section | 斜め分割セクション | clip-pathで斜め境界 |
| Curved Divider | 波線区切り | SVG波線でセクション区切り |
| Off-canvas | オフキャンバス | 画面外からスライドして出るパネル |
| Centered Column | 中央1カラム | 中央寄せの1カラム |
| Aspect Ratio Box | アスペクト比固定 | 縦横比固定のボックス |
| Sticky Footer | スティッキーフッター | 短い内容でも下部に張り付くフッター |
| Timeline | タイムライン | 縦線とドットで時系列 |
| Pricing Table | 料金表 | 複数プランを横並び比較 |
| Comparison Table | 比較表 | ○✕のマトリクス |
| Image Mosaic | 画像モザイク | 大小タイルを敷き詰める |
| Sticky Sidebar | スティッキーサイドバー | スクロール追従の側欄 |
| Scroll Snap | スクロールスナップ | 要素境界でピタッと止まる |
| Magazine Layout | 雑誌レイアウト | 大見出し＋複数カラム本文 |
| Mega Footer | メガフッター | 複数カラムの大きなフッター |
| Feature List | 特徴リスト / フィーチャー | アイコン＋短文を3〜4個並べる |
| FAQ Section | FAQセクション | よくある質問のリスト |
| CTA Banner | CTAバナー | アクションを促す目立つ横長バナー |
| Stats Row | 数字並び / Statsセクション | 大きな数値＋小さなラベルの並び |
| Sticky CTA | スティッキーCTA | 画面下に張り付くCTAバー |
| App Shell | アプリシェル | ヘッダー＋サイドナビ＋下ナビの骨格 |
| Testimonials Wall | お客様の声ウォール | レビューカードをタイル状に並べる |
| Logo Bar | ロゴバー / 導入企業ロゴ | ロゴを水平一列に並べる帯 |
| Logo Marquee | ロゴマーキー | ロゴが横方向に無限スクロール |
| Newsletter Signup | ニュースレター登録 | メール入力欄＋ボタンの帯 |
| About Section | アバウトセクション | テキスト＋画像の見開き型 |
| Team Section | チームセクション | 顔写真と肩書をグリッドで並べる |
| Process Steps | プロセスステップ | STEP 01〜04の番号付き手順 |
| Roadmap | ロードマップ | 時系列フェーズ表示 |
| Auto-fit Grid | オートフィットグリッド | repeat(auto-fit, minmax) |
| Subgrid | サブグリッド | 親のトラックを継承して見出し行揃え |
| Container Query Layout | コンテナクエリレイアウト | 親要素幅で配置切替（@container） |
| Intrinsic Grid | イントリンシックグリッド | min-content/max-contentで列幅 |
| Quilt Layout | キルトレイアウト | 大小矩形をパッチワーク的に |
| Broken Grid | ブロークングリッド | 通常グリッドを意図的にずらす |
| Anti-Grid | アンチグリッド | 整列を放棄した自由配置 |
| Mobile Tab Bar | モバイルタブバー | 画面下部固定のアイコン式 |
| Pill Nav | ピルナビ | 丸角薬カプセル状ナビ |
| Anchor Nav | アンカーナビ / 目次 | ページ内目次型ナビ |
| Floating Action Bar | フローティングアクションバー | 画面下に浮く操作集合 |
| Story Bar | ストーリーバー | 円形サムネを横スクロール |
| Widget Grid Dashboard | ウィジェットグリッドダッシュボード | 自由配置のカードウィジェット |
| Filter Sidebar | フィルターサイドバー | 左に絞り込み、右に結果 |
| Toolbar Layout | ツールバーレイアウト | 操作ボタンの工具帯 |
| List-Detail | リスト詳細 | 左リスト・右詳細の二画面 |
| Three-Pane Layout | 三ペイン | フォルダ/リスト/詳細の三分割 |
| Inbox Layout | インボックスレイアウト | 件名行が縦に積まれる |
| Calendar Grid | カレンダーグリッド | 7×N の日付格子 |
| Detail Page Hero | 詳細ページヒーロー | 左画像・右メタ大型 |
| Coverflow | カバーフロー | 中央大、両端傾斜の立体カルーセル |
| Scrollytelling | スクロリテリング | 左固定・右進行 |
| Boxed Layout | ボックスレイアウト | 中央に最大幅の箱型 |
| Framed Layout | フレームドレイアウト | 四辺余白＋枠線で絵画風 |
| Overlap Layout | オーバーラップレイアウト | 隣り合う要素を意図的に重ねる |
| Stacked Cards | スタックドカード | 後ろに重なるカードが見える |
| Split Hero | スプリットヒーロー | 左テキスト/右ビジュアル二分割 |
| Quote Section | クォートセクション | 大きな引用符＋一文 |
| Press Coverage | プレスカバレッジ | メディアロゴ＋短文引用 |
| Pricing Tier Cards | プライシングティアカード | 3〜4プラン横並び比較 |
| Comparison Slider | 比較スライダー | 中央バーで左右切り分けるBefore/After |
| Diagonal Split | 斜め分割 | 斜め線で画面を二分 |

---

## フォント / Typography（38 用語）

| 英語名 | 日本語名 | 説明 |
|---|---|---|

---

## カラー&スタイル / Color & Style（42 用語）

| 英語名 | 日本語名 | 説明 |
|---|---|---|
| Gradient | グラデーション | 線形/円形などの段階的な色変化 |
| Glassmorphism | グラスモーフィズム | 半透明＋ブラーの磨りガラス |
| Neumorphism | ニューモーフィズム | 同色背景の柔らかい凹凸 |
| Duotone | デュオトーン | 2色グラデーションで画像を塗る |
| Mesh Gradient | メッシュグラデーション | 複数色を網目状に混ぜる |
| Monochrome | モノクロ / グレースケール | 彩度ゼロに統一 |
| Complementary Colors | 補色 | 色相環で正反対の2色 |
| Brutalism | ブルータリズム | 原色・太枠・段付き影の荒々しいスタイル |
| Dark Mode | ダークモード | 黒系背景＋明るい文字 |
| Noise / Grain | ノイズ / グレイン | 微細なノイズで質感 |
| Animated Gradient | アニメーショングラデーション | 色がゆっくり動く |
| Triadic | トライアド配色 / 三色配色 | 色相環120°ずつの3色 |
| Analogous | 類似色 / アナロガス | 色相環で隣り合った色 |
| Color Swatch | カラースウォッチ | デザインシステムの色見本 |
| Monochromatic | モノクロマティック / 単色配色 | 1色の明度・彩度違い |
| Pastel Palette | パステル配色 | 淡くやわらかい配色 |
| Earth Tone | アースカラー | 土・木・砂のブラウン系 |
| Iridescent | イリディセント / 虹色 | CDの裏面のような虹色 |
| Neon | ネオン | 蛍光色＋強い発光 |
| Drop Shadow | ドロップシャドウ | 要素の下の影 |
| Color Contrast | カラーコントラスト | 文字色と背景色の明度差（WCAG 4.5:1+） |
| Spacing Scale | 余白スケール | 4/8/16/24...の体系 |
| Split-Complementary | スプリットコンプリメンタリー | 基準色+補色両隣2色の3色配色 |
| Tetradic | テトラディック / 矩形配色 | 補色2組の4色配色 |
| 60-30-10 Rule | 60-30-10の法則 | メイン60%/サブ30%/アクセント10% |
| Tints | ティント | 色＋白の明るいバリエーション |
| Shades | シェード | 色＋黒の暗いバリエーション |
| Tones | トーン | 色＋グレーの彩度落ち |
| Semantic Color | セマンティックカラー | success/warning/error/info等 |
| HSL | HSL色空間 | Hue/Saturation/Lightnessモデル |
| OKLCH | OKLCH色空間 | 知覚的に均等な近代色空間 |
| Skeuomorphism | スキューモーフィズム | 現実素材を模した立体UI |
| Flat Design | フラットデザイン | 影なし平面的なスタイル |
| Material Design | マテリアルデザイン | 紙とインクの物理メタファ |
| Memphis Design | メンフィスデザイン | 80年代派手色＋ジグザグ装飾 |
| Vaporwave | ヴェイパーウェイブ | ピンク/シアン+ギリシャ彫刻 |
| Y2K | Y2Kスタイル | クローム/バブル/テック装飾 |
| Maximalism | マキシマリズム | 色や要素を過剰に詰め込む |
| Claymorphism | クレイモーフィズム | 粘土風の柔らかい立体＋パステル |
| Inner Shadow | インナーシャドウ | 要素内側の影でへこみ表現 |
| Risograph | リソグラフ | 版ずれ・粒状・限定色 |
| Halftone | ハーフトーン | 大小の網点で濃淡を表現 |

---

## UIパーツ / UI Components（93 用語）

| 英語名 | 日本語名 | 説明 |
|---|---|---|
| Toast | トースト | 画面端に一時的に出る通知 |
| Tooltip | ツールチップ | ホバーで出る小さな吹き出し |
| Accordion | アコーディオン | クリック開閉の折りたたみ |
| Badge | バッジ | アイコン右上などに付ける小印 |
| Chip | チップ / タグ | タグ型の小要素 |
| Breadcrumb | パンくずリスト | 階層を示すナビ |
| Floating Action Button | FAB | 右下に浮かぶ円形ボタン |
| Modal | モーダル / ダイアログ | 暗背景＋上に浮かぶウィンドウ |
| Snackbar | スナックバー | 下中央に出る通知バー |
| Progress Bar | プログレスバー | 進捗を示す横棒 |
| Spinner | スピナー / ローディングドット | 動き続けるローディング |
| Switch | スイッチ / トグル | オン/オフ切替 |
| Slider | スライダー / レンジ | ドラッグで値選択 |
| Avatar | アバター | 円形画像 |
| Stepper | ステッパー | 複数ステップの進捗 |
| Carousel | カルーセル | 横スライドの複数枚表示 |
| Empty State | 空状態 | データなし時の表示 |
| Segmented Control | セグメンテッドコントロール | 排他切替の横並びボタン |
| Dropdown | ドロップダウン | クリックで下に開く選択リスト |
| Combobox | コンボボックス / オートコンプリート | 入力＋候補絞り込み |
| Date Picker | デートピッカー | カレンダー形式の日付選択 |
| Color Picker | カラーピッカー | 視覚的な色選択 |
| File Upload | ファイルアップロード / ドロップゾーン | D&Dの点線枠 |
| Checkbox | チェックボックス | 複数選択のオン/オフ |
| Radio Button | ラジオボタン | 排他選択 |
| Star Rating | 星評価 / レーティング | 星でレビュー |
| Pagination | ページネーション | ページ切替UI |
| Search Bar | 検索バー | キーワード入力フォーム |
| Bottom Sheet | ボトムシート | モバイルで下からせり上がる |
| Popover | ポップオーバー | 矢印付き浮動パネル |
| Command Palette | コマンドパレット | ⌘Kで開くランチャー |
| Chat Bubble | チャットバブル | 吹き出し型メッセージ |
| Floating Label | フローティングラベル | ラベルが上に浮く入力 |
| Banner | バナー / インフォバー | ページ上部の通知帯 |
| Tabs | タブ | 排他的なセクション切替 |
| Stat Card | 統計カード | 数値＋前期比のダッシュボード要素 |
| Status Indicator | ステータスインジケータ | 色付き丸でオンライン状態 |
| Like Button | いいねボタン | ハートで反応するボタン |
| Notification Bell | 通知ベル | 未読バッジ付きベル |
| Inline Edit | インライン編集 | クリックで編集モード |
| Tag Input | タグ入力 | 入力でチップ化される入力欄 |
| Code Block | コードブロック | シンタックスハイライト付きコード |
| Tree View | ツリービュー | 折りたたみ可能な階層 |
| Kanban Board | カンバンカード / ボード | Todo/Doing/Doneのタスク管理 |
| Pricing Card | 料金カード | 単体プラン表示 |
| Logo Cloud | ロゴクラウド | 導入企業ロゴの並び |
| Testimonial | お客様の声 / テスティモニアル | 引用＋写真の推薦 |
| Top Loading Bar | ローディングバー（上部） | 画面上端の細いバー |
| Toggle Group | トグルグループ | 横並びの独立トグル |
| Drawer | ドロワー | 画面端からスライドして出るパネル |
| Range Slider | レンジスライダー | 2つのつまみで範囲選択 |
| Multi-select | マルチセレクト | 複数選択＋チップ表示 |
| Number Stepper | 数値ステッパー | ＋／−で数値増減 |
| Lightbox | ライトボックス | 画像を暗背景上に大きく表示 |
| Textarea | テキストエリア | 複数行入力、リサイズハンドル付き |
| Input Group | インプットグループ | 前後にアイコン/接頭辞を連結 |
| OTP Input | OTP入力 | 1文字ずつ区切られた数桁の入力 |
| Password Strength Meter | パスワード強度メーター | 弱→強の4分割バー |
| Date Range Picker | デートレンジピッカー | カレンダー上で範囲ハイライト |
| Time Picker | タイムピッカー | 時/分/秒の選択UI |
| Phone Input | フォンインプット | 国コード選択付き電話番号入力 |
| Rich Text Editor | リッチテキストエディタ | ツールバー付きWYSIWYG |
| Markdown Editor | マークダウンエディタ | 編集+プレビューの分割 |
| Menubar | メニューバー | デスクトップ風水平メニュー |
| Context Menu | コンテキストメニュー | 右クリック由来の文脈メニュー |
| Data Table | データテーブル | ソート/フィルタ/ページング対応の表 |
| Diff View | 差分ビュー | 削除赤/追加緑の行単位差分 |
| Calendar | カレンダー | 月間ビューの大型カレンダー |
| Gantt Chart | ガントチャート | タスク期間バーで時系列表示 |
| Heatmap | ヒートマップ | GitHub風 7×N濃淡マス |
| Description List | 記述リスト | ラベル:値のdt/dd形式 |
| Alert | アラート | 色帯+アイコン+×閉じる |
| Confirm Dialog | 確認ダイアログ | YES/NO確認モーダル |
| Inline Validation | インライン検証 | フィールド直下のエラー |
| Audio Player | オーディオプレイヤー | ▶︎/シーク/音量 |
| Video Player | ビデオプレイヤー | 中央▶︎+下部コントロール |
| Image Cropper | 画像クロッパー | 画像上にドラッグ枠 |
| Avatar Group | アバターグループ | 重なり合うアバター+「+N」 |
| Card | カード | 画像+タイトル+説明+ボタンの汎用 |
| Sheet | シート | 端から滑り込む軽量パネル |
| Divider | ディバイダー | ラベル付きの区切り線 |
| Resizable Panel | リサイズ可能パネル | 境界グリップで幅変更 |
| Callout | コールアウト | 💡+色付き縦線の補足ブロック |
| Sparkline | スパークライン | 表セル内の極小折れ線 |
| Gauge | ゲージ | 半円弧の計器（赤→黄→緑） |
| Donut Chart | ドーナツチャート | 中央が空いた円グラフ |
| KPI Tile | KPIタイル | 大数値+スパークライン+トレンド |
| Chat Input | チャットコンポーザー | AI向け送信入力欄 |
| Streaming Text | ストリーミングテキスト | 末尾点滅キャレットの逐次出力 |
| Tool Call Card | ツールコールカード | AI関数実行のステータスカード |
| Inline Suggestion | インラインサジェスト / ゴーストテキスト | 続きを灰色予測表示 |
| Citation Pill | サイテーションピル | 文末の上付き番号で出典 |
| Back to Top | バック・トゥ・トップ | 右下に出る↑ボタン |
| Theme Switcher | テーマスイッチャー | Light/Dark/System切替 |
