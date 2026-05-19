import type { DemoProps } from '../../../types';
import styles from './PageTransitionDemo.module.css';

export function PageTransitionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.page} ${styles.a}`}>Page A</div>
      <div className={`${styles.page} ${styles.b}`}>Page B</div>
      <div className={styles.curtain} />
    </div>
  );
}
