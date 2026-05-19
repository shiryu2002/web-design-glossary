import type { DemoProps } from '../../../types';
import styles from './GaugeDemo.module.css';

export function GaugeDemo(_: DemoProps) {
  // value 0..1 → 72% in green zone
  const value = 0.72;
  const angle = -90 + value * 180; // -90 (left) to 90 (right)
  return (
    <div className={styles.stage}>
      <div className={styles.wrap}>
        <svg viewBox="0 0 100 60" className={styles.svg}>
          <path
            d="M 10 55 A 40 40 0 0 1 35 18"
            stroke="#e35b5b"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 35 18 A 40 40 0 0 1 65 18"
            stroke="#e3c25b"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 65 18 A 40 40 0 0 1 90 55"
            stroke="#4eb87a"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <g transform={`rotate(${angle} 50 55)`}>
            <line
              x1="50"
              y1="55"
              x2="50"
              y2="22"
              stroke="var(--text)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <circle cx="50" cy="55" r="4" fill="var(--text)" />
        </svg>
        <div className={styles.value}>72</div>
        <div className={styles.label}>スコア</div>
      </div>
    </div>
  );
}
