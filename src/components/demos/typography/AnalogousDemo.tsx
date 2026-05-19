import type { DemoProps } from '../../../types';
import styles from './AnalogousDemo.module.css';

export function AnalogousDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.s1} />
      <div className={styles.s2} />
      <div className={styles.s3} />
      <div className={styles.label}>近接した色相</div>
    </div>
  );
}
