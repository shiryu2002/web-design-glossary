import type { DemoProps } from '../../../types';
import styles from './AnchoringDemo.module.css';

export function AnchoringDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.original}>¥9,800</div>
      <div className={styles.arrow}>↓</div>
      <div className={styles.sale}>¥3,980</div>
      <div className={styles.label}>59% OFF！</div>
    </div>
  );
}
