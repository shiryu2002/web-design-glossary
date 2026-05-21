import type { DemoProps } from '../../../types';
import styles from './PeakEndRuleDemo.module.css';

export function PeakEndRuleDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 220 110" className={styles.svg} preserveAspectRatio="xMidYMid meet">
        <line x1="10" y1="90" x2="210" y2="90" stroke="var(--border)" strokeWidth="1" />
        <path
          className={styles.curve}
          d="M 14 80 Q 40 70 60 60 T 100 28 T 140 65 T 188 22"
          stroke="#5b4ee3"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
        />
        <circle className={styles.peak} cx="100" cy="28" r="6" fill="#ff7da6" />
        <circle className={styles.end} cx="188" cy="22" r="6" fill="#5b4ee3" />
        <text x="100" y="14" className={styles.txtPeak} textAnchor="middle">peak</text>
        <text x="188" y="9" className={styles.txtEnd} textAnchor="middle">end</text>
      </svg>
    </div>
  );
}
