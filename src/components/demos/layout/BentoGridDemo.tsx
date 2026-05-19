import type { DemoProps } from '../../../types';
import styles from './BentoGridDemo.module.css';

export function BentoGridDemo(_: DemoProps) {
  return (
    <div className={styles.grid}>
      <div className={`${styles.cell} ${styles.a}`}>A</div>
      <div className={`${styles.cell} ${styles.b}`}>B</div>
      <div className={`${styles.cell} ${styles.c}`}>C</div>
      <div className={`${styles.cell} ${styles.d}`}>D</div>
      <div className={`${styles.cell} ${styles.e}`}>E</div>
    </div>
  );
}
