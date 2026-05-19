import type { DemoProps } from '../../../types';
import styles from './DragReorderDemo.module.css';

export function DragReorderDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <ul className={styles.list}>
        <li className={styles.item}>One</li>
        <li className={`${styles.item} ${styles.shift}`}>Two</li>
        <li className={`${styles.item} ${styles.dragging}`}>Three</li>
        <li className={`${styles.item} ${styles.shift}`}>Four</li>
        <li className={styles.item}>Five</li>
      </ul>
    </div>
  );
}
