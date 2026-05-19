import type { ComponentType } from 'react';

export type Category =
  | 'cognitive'
  | 'animation'
  | 'layout'
  | 'font'
  | 'typography'
  | 'component';

export type DemoMode = 'before' | 'after';

export type DemoProps = {
  mode?: DemoMode;
};

export type Term = {
  id: string;
  nameJa: string;
  nameEn: string;
  category: Category;
  description: string;
  Demo: ComponentType<DemoProps>;
  hasBeforeAfter: boolean;
};

export type CategoryMeta = {
  id: Category;
  labelJa: string;
  labelEn: string;
};

export const CATEGORIES: CategoryMeta[] = [
  { id: 'cognitive', labelJa: '認知心理学', labelEn: 'Cognitive Psychology' },
  { id: 'animation', labelJa: 'アニメーション', labelEn: 'Animation' },
  { id: 'layout', labelJa: 'レイアウト', labelEn: 'Layout' },
  { id: 'font', labelJa: 'フォント', labelEn: 'Typography' },
  { id: 'typography', labelJa: 'カラー&スタイル', labelEn: 'Color & Style' },
  { id: 'component', labelJa: 'UIパーツ', labelEn: 'UI Components' },
];
