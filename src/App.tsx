import { useCallback, useEffect, useMemo, useState } from 'react';
import { CATEGORIES, type Category, type Term } from './types';
import { TERMS } from './data/terms';
import { Tabs } from './components/Tabs';
import { SearchBar } from './components/SearchBar';
import { TermGrid } from './components/TermGrid';
import { TermModal } from './components/TermModal';
import styles from './App.module.css';

const TERM_BY_ID = new Map(TERMS.map((t) => [t.id, t]));

function readTermIdFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  return new URLSearchParams(window.location.search).get('t');
}

function writeTermIdToUrl(id: string | null) {
  const url = new URL(window.location.href);
  if (id) {
    if (url.searchParams.get('t') === id) return;
    url.searchParams.set('t', id);
  } else {
    if (!url.searchParams.has('t')) return;
    url.searchParams.delete('t');
  }
  window.history.pushState({}, '', url);
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>(() => {
    const id = readTermIdFromUrl();
    return (id && TERM_BY_ID.get(id)?.category) || 'cognitive';
  });
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(() => {
    const id = readTermIdFromUrl();
    return (id && TERM_BY_ID.get(id)) || null;
  });
  const [query, setQuery] = useState('');

  const handleSelect = useCallback((term: Term | null) => {
    setSelectedTerm(term);
    writeTermIdToUrl(term?.id ?? null);
  }, []);

  const handleClose = useCallback(() => {
    handleSelect(null);
  }, [handleSelect]);

  useEffect(() => {
    const sync = () => {
      const id = readTermIdFromUrl();
      const term = id ? TERM_BY_ID.get(id) ?? null : null;
      setSelectedTerm(term);
      if (term) setActiveCategory(term.category);
    };
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

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
          <TermGrid terms={visibleTerms} onSelect={handleSelect} />
        )}
      </main>

      {selectedTerm && (
        <TermModal term={selectedTerm} onClose={handleClose} />
      )}

      <footer className={styles.footer}>
        全 {TERMS.length} 用語 / {CATEGORIES.length} ジャンル
      </footer>
    </div>
  );
}
