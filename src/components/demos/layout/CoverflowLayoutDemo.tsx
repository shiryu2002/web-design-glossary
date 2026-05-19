import type { DemoProps } from '../../../types';
import styles from './CoverflowLayoutDemo.module.css';

export function CoverflowLayoutDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.card} ${styles.far}`}>1</div>
      <div className={`${styles.card} ${styles.side} ${styles.left}`}>2</div>
      <div className={`${styles.card} ${styles.center}`}>3</div>
      <div className={`${styles.card} ${styles.side} ${styles.right}`}>4</div>
      <div className={`${styles.card} ${styles.far} ${styles.farRight}`}>5</div>
    </div>
  );
}
