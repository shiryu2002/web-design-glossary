import type { DemoProps } from '../../../types';
import styles from './TriadicDemo.module.css';

export function TriadicDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.s1} />
      <div className={styles.s2} />
      <div className={styles.s3} />
      <div className={styles.label}>120° / 120° / 120°</div>
    </div>
  );
}
