import type { DemoProps } from '../../../types';
import styles from './MonochromaticDemo.module.css';

export function MonochromaticDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.s1} />
      <div className={styles.s2} />
      <div className={styles.s3} />
      <div className={styles.s4} />
      <div className={styles.s5} />
    </div>
  );
}
