import type { DemoProps } from '../../../types';
import styles from './AntiGridDemo.module.css';

export function AntiGridDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.box} ${styles.b1}`}>chaos</div>
      <div className={`${styles.box} ${styles.b2}`}>free</div>
      <div className={`${styles.box} ${styles.b3}`}>flow</div>
      <div className={`${styles.box} ${styles.b4}`}>raw</div>
      <div className={`${styles.box} ${styles.b5}`}>wild</div>
      <div className={`${styles.box} ${styles.b6}`}>anti</div>
    </div>
  );
}
