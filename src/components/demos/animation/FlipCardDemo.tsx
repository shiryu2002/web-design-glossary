import type { DemoProps } from '../../../types';
import styles from './FlipCardDemo.module.css';

export function FlipCardDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={`${styles.face} ${styles.front}`}>♠</div>
        <div className={`${styles.face} ${styles.back}`}>A</div>
      </div>
    </div>
  );
}
