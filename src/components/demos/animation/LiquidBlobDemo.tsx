import type { DemoProps } from '../../../types';
import styles from './LiquidBlobDemo.module.css';

export function LiquidBlobDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
    </div>
  );
}
