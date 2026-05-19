import type { DemoProps } from '../../../types';
import styles from './LiquidGlassDemo.module.css';

export function LiquidGlassDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.blobA} />
      <div className={styles.blobB} />
      <div className={styles.blobC} />
      <div className={styles.glass}>
        <div className={styles.title}>Liquid Glass</div>
        <div className={styles.sub}>refracting & flowing</div>
      </div>
    </div>
  );
}
