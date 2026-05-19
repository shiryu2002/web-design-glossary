import type { DemoProps } from '../../../types';
import styles from './GestaltPragnanzDemo.module.css';

export function GestaltPragnanzDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 120 80" className={styles.svg}>
        <circle cx="40" cy="40" r="22" fill="none" stroke="var(--accent)" strokeWidth="3" />
        <rect x="60" y="20" width="40" height="40" fill="none" stroke="#ff5d8f" strokeWidth="3" />
      </svg>
      <div className={styles.label}>→ 円と四角と認識</div>
    </div>
  );
}
