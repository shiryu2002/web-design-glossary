import type { DemoProps } from '../../../types';
import styles from './NeonDemo.module.css';

export function NeonDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <span className={styles.neon}>NEON</span>
    </div>
  );
}
