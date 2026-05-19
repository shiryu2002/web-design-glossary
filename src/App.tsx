import { useMemo, useState } from 'react';
import { CATEGORIES, type Category, type Term } from './types';
import { TERMS } from './data/terms';
import { Tabs } from './components/Tabs';
import { SearchBar } from './components/SearchBar';
import { TermGrid } from './components/TermGrid';
import { TermModal } from './components/TermModal';
import styles from './App.module.css';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('cognitive');
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [query, setQuery] = useState('');

  const searching = query.trim().length > 0;

  const visibleTerms = useMemo(() => {
    if (searching) {
      const q = query.trim().toLowerCase();
      return TERMS.filter(
        (t) =>
          t.nameJa.toLowerCase().includes(q) ||
          t.nameEn.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q),
      );
    }
    return TERMS.filter((t) => t.category === activeCategory);
  }, [activeCategory, query, searching]);

  const counts = useMemo(() => {
    const map: Record<Category, number> = {
      cognitive: 0,
      animation: 0,
      layout: 0,
      font: 0,
      typography: 0,
      component: 0,
    };
    visibleTerms.forEach((t) => {
      map[t.category]++;
    });
    return map;
  }, [visibleTerms]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          WEBデザイン用語ビジュアル辞典
          <span className={styles.subtitle}>
            Visual Glossary of Web Design Terms
          </span>
        </h1>
        <p className={styles.lede}>
          名前と見た目を紐づけて、AIに正確に伝えるためのレファレンス。
        </p>
      </header>

      <div className={styles.controls}>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <Tabs
        categories={CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
        disabled={searching}
      />

      <main className={styles.main}>
        {searching && (
          <div className={styles.summary}>
            <strong>{visibleTerms.length}</strong> 件ヒット
            {visibleTerms.length > 0 && (
              <span className={styles.breakdown}>
                （認知 {counts.cognitive} / アニメ {counts.animation} / レイアウト {counts.layout} / フォント {counts.font} / カラー&スタイル {counts.typography} / UIパーツ {counts.component}）
              </span>
            )}
          </div>
        )}

        {visibleTerms.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyTitle}>該当する用語がありません</div>
            <div className={styles.emptySub}>「{query}」に一致するものは見つかりませんでした</div>
          </div>
        ) : (
          <TermGrid terms={visibleTerms} onSelect={setSelectedTerm} />
        )}
      </main>

      {selectedTerm && (
        <TermModal term={selectedTerm} onClose={() => setSelectedTerm(null)} />
      )}

      <footer className={styles.footer}>
        全 {TERMS.length} 用語 / {CATEGORIES.length} ジャンル
      </footer>
    </div>
  );
}
