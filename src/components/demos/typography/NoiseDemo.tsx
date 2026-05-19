import type { DemoProps } from '../../../types';
import styles from './NoiseDemo.module.css';

export function NoiseDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.surface} ${mode === 'after' ? styles.withNoise : ''}`}>
        <div className={styles.label}>NOISE</div>
      </div>
    </div>
  );
}
