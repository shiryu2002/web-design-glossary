import type { DemoProps } from '../../../types';
import styles from './FabDemo.module.css';

export function FabDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.content}>
        <div className={styles.row} />
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <button className={styles.fab} aria-label="新規作成">＋</button>
    </div>
  );
}
