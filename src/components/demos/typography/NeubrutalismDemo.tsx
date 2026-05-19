import type { DemoProps } from '../../../types';
import styles from './NeubrutalismDemo.module.css';

export function NeubrutalismDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.tag}>NEW</div>
        <div className={styles.title}>Hello!</div>
        <button className={styles.btn}>Click →</button>
      </div>
    </div>
  );
}
