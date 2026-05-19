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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

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
          <button className={styles.close} onClick={onClose} aria-label="閉じる">
            ✕
          </button>
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
