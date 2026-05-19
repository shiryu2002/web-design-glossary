import type { DemoProps } from '../../../types';
import styles from './DescenderDemo.module.css';

export function DescenderDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span className={styles.letter}>g</span>
        <span className={styles.letter}>j</span>
        <span className={styles.letter}>p</span>
        <span className={styles.letter}>q</span>
        <span className={styles.guide} aria-hidden />
        <span className={styles.shade} aria-hidden />
      </div>
      <div className={styles.note}>descender</div>
    </div>
  );
}
