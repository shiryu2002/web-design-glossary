import type { DemoProps } from '../../../types';
import styles from './GestaltClosureDemo.module.css';

export function GestaltClosureDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 100 100" className={styles.svg}>
        <circle cx="50" cy="50" r="32" fill="none" stroke="var(--accent)" strokeWidth="5"
          strokeDasharray="20 12" strokeLinecap="round" />
      </svg>
      <div className={styles.label}>→ 円に見える</div>
    </div>
  );
}
