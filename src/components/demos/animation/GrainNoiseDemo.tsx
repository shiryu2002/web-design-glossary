import type { DemoProps } from '../../../types';
import styles from './GrainNoiseDemo.module.css';

export function GrainNoiseDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <svg className={styles.noise} xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch">
              <animate attributeName="seed" from="0" to="20" dur="1.4s" repeatCount="indefinite" />
            </feTurbulence>
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        <span className={styles.label}>GRAIN</span>
      </div>
    </div>
  );
}
