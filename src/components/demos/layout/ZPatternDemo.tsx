import type { DemoProps } from '../../../types';
import styles from './ZPatternDemo.module.css';

export function ZPatternDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg className={styles.arrow} viewBox="0 0 200 120" preserveAspectRatio="none">
        <polyline
          points="14,14 186,14 14,106 186,106"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6 6"
        />
      </svg>
      <div className={`${styles.pt} ${styles.tl}`}>1</div>
      <div className={`${styles.pt} ${styles.tr}`}>2</div>
      <div className={`${styles.pt} ${styles.bl}`}>3</div>
      <div className={`${styles.pt} ${styles.br}`}>4</div>
    </div>
  );
}
