import type { DemoProps } from '../../../types';
import styles from './BrutalismDemo.module.css';

export function BrutalismDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.box}>
        <div className={styles.headline}>BOLD!!</div>
        <button className={styles.btn}>CLICK ME</button>
      </div>
    </div>
  );
}
