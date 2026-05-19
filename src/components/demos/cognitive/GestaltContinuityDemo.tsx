import type { DemoProps } from '../../../types';
import styles from './GestaltContinuityDemo.module.css';

export function GestaltContinuityDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 160 80" className={styles.svg}>
        <path d="M 10 40 Q 50 5 80 40 T 150 40" fill="none"
          stroke="var(--accent)" strokeWidth="3" strokeDasharray="2 4" />
        {[10, 30, 50, 70, 90, 110, 130, 150].map((x, i) => (
          <circle key={i} cx={x} cy={40 + (i % 2 === 0 ? -15 : 15) * Math.sin(i)} r="5"
            fill={i % 2 === 0 ? 'var(--accent)' : '#ff5d8f'} />
        ))}
      </svg>
    </div>
  );
}
