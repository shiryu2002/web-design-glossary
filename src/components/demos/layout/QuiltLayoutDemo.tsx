import type { DemoProps } from '../../../types';
import styles from './QuiltLayoutDemo.module.css';

export function QuiltLayoutDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        <div className={`${styles.patch} ${styles.p1}`} />
        <div className={`${styles.patch} ${styles.p2}`} />
        <div className={`${styles.patch} ${styles.p3}`} />
        <div className={`${styles.patch} ${styles.p4}`} />
        <div className={`${styles.patch} ${styles.p5}`} />
        <div className={`${styles.patch} ${styles.p6}`} />
        <div className={`${styles.patch} ${styles.p7}`} />
      </div>
    </div>
  );
}
