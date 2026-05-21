import { useEffect, useState } from 'react';
import type { Term, DemoMode } from '../types';
import styles from './TermModal.module.css';

type Props = {
  term: Term;
  onClose: () => void;
};

export function TermModal({ term, onClose }: Props) {
  const { Demo, nameJa, nameEn, description, hasBeforeAfter } = term;
  const [mode, setMode] = useState<DemoMode>('after');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    setCopied(false);
  }, [term.id]);

  const handleCopy = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set('t', term.id);
    const link = url.toString();
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = link;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={nameJa}
      >
        <div className={styles.head}>
          <div className={styles.titles}>
            <h2 className={styles.nameJa}>{nameJa}</h2>
            <div className={styles.nameEn}>{nameEn}</div>
          </div>
          <div className={styles.actions}>
            <button
              className={`${styles.copy} ${copied ? styles.copied : ''}`}
              onClick={handleCopy}
              aria-label={copied ? 'リンクをコピーしました' : 'この用語へのリンクをコピー'}
              aria-live="polite"
              title="この用語へのリンクをコピー"
            >
              {copied ? (
                <>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>コピー済</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
                    <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
                  </svg>
                  <span>リンクをコピー</span>
                </>
              )}
            </button>
            <button className={styles.close} onClick={onClose} aria-label="閉じる">
              ✕
            </button>
          </div>
        </div>

        <div className={styles.stage}>
          <Demo mode={mode} />
        </div>

        {hasBeforeAfter && (
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${mode === 'before' ? styles.toggleActive : ''}`}
              onClick={() => setMode('before')}
            >
              Before（効果なし）
            </button>
            <button
              className={`${styles.toggleBtn} ${mode === 'after' ? styles.toggleActive : ''}`}
              onClick={() => setMode('after')}
            >
              After（効果あり）
            </button>
          </div>
        )}

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
