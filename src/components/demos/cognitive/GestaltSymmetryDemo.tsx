import type { DemoProps } from '../../../types';
import styles from './GestaltSymmetryDemo.module.css';

export function GestaltSymmetryDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 120 60" className={styles.svg}>
        <line x1="60" y1="0" x2="60" y2="60" stroke="var(--accent-soft)" strokeDasharray="3 3" />
        <circle cx="30" cy="30" r="14" fill="var(--accent)" />
        <circle cx="90" cy="30" r="14" fill="var(--accent)" />
        <rect x="42" y="36" width="36" height="8" fill="#ff5d8f" />
      </svg>
    </div>
  );
}
