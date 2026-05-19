import type { DemoProps } from '../../../types';
import styles from './GestaltFigureGroundDemo.module.css';

export function GestaltFigureGroundDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 100 80" className={styles.svg}>
        <rect x="0" y="0" width="100" height="80" fill="#221f1c" />
        <path
          d="M 35 10 C 45 10, 50 25, 50 40 C 50 55, 45 70, 35 70 Z M 65 10 C 55 10, 50 25, 50 40 C 50 55, 55 70, 65 70 Z"
          fill="#f6f4ef"
        />
      </svg>
      <div className={styles.label}>顔 or 壺？</div>
    </div>
  );
}
