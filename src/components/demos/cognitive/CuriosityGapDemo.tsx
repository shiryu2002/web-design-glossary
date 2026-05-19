import type { DemoProps } from '../../../types';
import styles from './CuriosityGapDemo.module.css';

export function CuriosityGapDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.title}>知らないと損する</div>
      <div className={styles.title}>3つの<span className={styles.blur}>理由</span></div>
      <div className={styles.link}>続きを読む →</div>
    </div>
  );
}
