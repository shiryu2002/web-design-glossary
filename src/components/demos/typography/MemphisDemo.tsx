import type { DemoProps } from '../../../types';
import styles from './MemphisDemo.module.css';

export function MemphisDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.dot} />
      <div className={styles.zigzag} />
      <div className={styles.bar} />
      <div className={styles.tri} />
      <div className={styles.label}>Memphis</div>
    </div>
  );
}
