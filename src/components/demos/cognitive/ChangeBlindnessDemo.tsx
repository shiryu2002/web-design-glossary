import type { DemoProps } from '../../../types';
import styles from './ChangeBlindnessDemo.module.css';

export function ChangeBlindnessDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.a}`} />
        <div className={styles.swap}>?</div>
        <div className={`${styles.box} ${styles.b}`} />
      </div>
      <div className={styles.label}>違いに気付ける？</div>
    </div>
  );
}
