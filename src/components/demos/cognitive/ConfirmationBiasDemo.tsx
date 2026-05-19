import type { DemoProps } from '../../../types';
import styles from './ConfirmationBiasDemo.module.css';

export function ConfirmationBiasDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bubble}>👍 ★</div>
      <div className={styles.arrow}>↓</div>
      <div className={styles.row}><div className={styles.s}>★</div><div className={styles.s}>★</div><div className={styles.s}>★</div></div>
      <div className={styles.label}>類似が増え続ける</div>
    </div>
  );
}
