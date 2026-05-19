import type { DemoProps } from '../../../types';
import styles from './OklchDemo.module.css';

export function OklchDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={styles.c1} />
        <div className={styles.c2} />
        <div className={styles.c3} />
        <div className={styles.c4} />
        <div className={styles.c5} />
        <div className={styles.c6} />
      </div>
      <div className={styles.note}>OKLCH / 知覚的均等 L=70</div>
    </div>
  );
}
