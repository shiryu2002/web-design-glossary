import type { DemoProps } from '../../../types';
import styles from './GestaltFigureGroundDemo.module.css';

const HALF = "M 50 8 L 66 8 L 66 14 C 64 17 56 18 53 22 C 51 26 54 28 58 30 C 60 33 55 34 55 38 C 52 40 58 42 54 44 C 51 46 58 48 54 50 C 58 54 63 58 65 64 C 66 68 65 70 64 72 L 50 72 Z";

export function GestaltFigureGroundDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 100 80" className={styles.svg} preserveAspectRatio="xMidYMid meet">
        <rect x="0" y="0" width="100" height="80" fill="#221f1c" />
        <path d={HALF} fill="#f6f4ef" />
        <path d={HALF} fill="#f6f4ef" transform="matrix(-1 0 0 1 100 0)" />
      </svg>
      <div className={styles.label}>顔 or 壺？</div>
    </div>
  );
}
