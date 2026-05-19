import type { DemoProps } from '../../../types';
import styles from './SpinDemo.module.css';

export function SpinDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.ring} />
      <div className={styles.label}>Loading...</div>
    </div>
  );
}
