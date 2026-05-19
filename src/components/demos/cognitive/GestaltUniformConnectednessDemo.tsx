import type { DemoProps } from '../../../types';
import styles from './GestaltUniformConnectednessDemo.module.css';

export function GestaltUniformConnectednessDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 120 60" className={styles.svg}>
        <line x1="20" y1="30" x2="50" y2="30" stroke="var(--accent)" strokeWidth="3" />
        <line x1="70" y1="30" x2="100" y2="30" stroke="var(--accent)" strokeWidth="3" />
        <circle cx="20" cy="30" r="7" fill="var(--accent)" />
        <circle cx="50" cy="30" r="7" fill="var(--accent)" />
        <circle cx="70" cy="30" r="7" fill="#ff5d8f" />
        <circle cx="100" cy="30" r="7" fill="#ff5d8f" />
      </svg>
    </div>
  );
}
