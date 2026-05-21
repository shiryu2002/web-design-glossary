import type { DemoProps } from '../../../types';
import styles from './VonRestorffDemo.module.css';

export function VonRestorffDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.list}>
        <div className={styles.item}>項目 A</div>
        <div className={styles.item}>項目 B</div>
        <div className={`${styles.item} ${styles.standout}`}>限定オファー</div>
        <div className={styles.item}>項目 D</div>
        <div className={styles.item}>項目 E</div>
      </div>
    </div>
  );
}
