import type { DemoProps } from '../../../types';
import styles from './GlowPulseDemo.module.css';

export function GlowPulseDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.orb} />
    </div>
  );
}
