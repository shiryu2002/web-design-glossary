import type { DemoProps } from '../../../types';
import styles from './OverlapLayoutDemo.module.css';

export function OverlapLayoutDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.image}>◈</div>
      <div className={styles.card}>
        <div className={styles.title}>Overlap</div>
        <div className={styles.text}>The card overlaps the image edge.</div>
      </div>
    </div>
  );
}
