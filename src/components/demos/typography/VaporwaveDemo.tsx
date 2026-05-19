import type { DemoProps } from '../../../types';
import styles from './VaporwaveDemo.module.css';

export function VaporwaveDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.sky} />
      <div className={styles.sun} />
      <div className={styles.grid} />
      <div className={styles.text}>AESTHETIC</div>
    </div>
  );
}
