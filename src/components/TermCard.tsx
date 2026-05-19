import type { Term } from '../types';
import styles from './TermCard.module.css';

type Props = {
  term: Term;
  onClick: () => void;
};

export function TermCard({ term, onClick }: Props) {
  const { Demo, nameJa, nameEn } = term;
  return (
    <button className={styles.card} onClick={onClick} aria-label={`${nameJa} の詳細を見る`}>
      <div className={styles.stage}>
        <Demo mode="after" />
      </div>
      <div className={styles.meta}>
        <div className={styles.nameJa}>{nameJa}</div>
        <div className={styles.nameEn}>{nameEn}</div>
      </div>
    </button>
  );
}
