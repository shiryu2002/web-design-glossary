import type { DemoProps } from '../../../types';
import styles from './ComboboxDemo.module.css';

const matches = ['Tokyo, Japan', 'Toronto, Canada', 'Tokushima, Japan'];

export function ComboboxDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.input}>
        Tok<span className={styles.cursor}>|</span>
      </div>
      <div className={styles.list}>
        {matches.map((m, i) => (
          <div className={`${styles.row} ${i === 0 ? styles.rowActive : ''}`} key={m}>
            <span className={styles.highlight}>Tok</span>
            {m.slice(3)}
          </div>
        ))}
      </div>
    </div>
  );
}
