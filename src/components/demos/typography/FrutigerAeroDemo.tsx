import type { DemoProps } from '../../../types';
import styles from './FrutigerAeroDemo.module.css';

export function FrutigerAeroDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.cloud1} />
      <div className={styles.cloud2} />
      <div className={styles.bubble1} />
      <div className={styles.bubble2} />
      <div className={styles.bubble3} />
      <button className={styles.btn}>
        <span className={styles.btnGloss} />
        <span className={styles.btnLabel}>start</span>
      </button>
    </div>
  );
}
