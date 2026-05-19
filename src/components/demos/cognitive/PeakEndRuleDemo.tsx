import type { DemoProps } from '../../../types';
import styles from './PeakEndRuleDemo.module.css';

export function PeakEndRuleDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 200 90" className={styles.svg}>
        <path
          d="M 10 70 L 30 60 L 50 55 L 70 30 L 90 50 L 110 55 L 130 60 L 150 45 L 170 25 L 190 50"
          fill="none" stroke="var(--accent)" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        />
        <circle cx="70" cy="30" r="5" fill="#ff5d8f" />
        <circle cx="170" cy="25" r="5" fill="#ff5d8f" />
        <text x="70" y="18" fontSize="9" textAnchor="middle"
          fill="var(--text)" fontWeight="800">Peak</text>
        <text x="170" y="13" fontSize="9" textAnchor="middle"
          fill="var(--text)" fontWeight="800">End</text>
      </svg>
    </div>
  );
}
