import type { DemoProps } from '../../../types';
import styles from './PathAnimationDemo.module.css';

export function PathAnimationDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 100 100" className={styles.svg}>
        <path
          className={styles.path}
          d="M 50 18 L 82 78 L 18 78 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
