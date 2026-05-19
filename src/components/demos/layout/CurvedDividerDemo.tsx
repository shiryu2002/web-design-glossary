import type { DemoProps } from '../../../types';
import styles from './CurvedDividerDemo.module.css';

export function CurvedDividerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.top}>
        <svg
          className={styles.wave}
          viewBox="0 0 200 30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C50,30 150,30 200,0 L200,30 L0,30 Z"
            fill="#fbfaf7"
          />
        </svg>
      </div>
      <div className={styles.bottom} />
    </div>
  );
}
