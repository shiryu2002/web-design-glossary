import type { Term } from '../types';
import { TermCard } from './TermCard';
import styles from './TermGrid.module.css';

type Props = {
  terms: Term[];
  onSelect: (term: Term) => void;
};

export function TermGrid({ terms, onSelect }: Props) {
  return (
    <div className={styles.grid}>
      {terms.map((t) => (
        <TermCard key={t.id} term={t} onClick={() => onSelect(t)} />
      ))}
    </div>
  );
}
