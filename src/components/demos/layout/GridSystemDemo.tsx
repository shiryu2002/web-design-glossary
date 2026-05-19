import type { DemoProps } from '../../../types';
import styles from './GridSystemDemo.module.css';

export function GridSystemDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.col}>
            <span>{i + 1}</span>
          </div>
        ))}
      </div>
      <div className={styles.row}>
        <div className={styles.span6}>6 cols</div>
        <div className={styles.span6}>6 cols</div>
      </div>
      <div className={styles.row}>
        <div className={styles.span4}>4</div>
        <div className={styles.span4}>4</div>
        <div className={styles.span4}>4</div>
      </div>
    </div>
  );
}
