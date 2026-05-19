import type { DemoProps } from '../../../types';
import styles from './DuotoneDemo.module.css';

export function DuotoneDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.photo} ${mode === 'after' ? styles.duotone : ''}`}>
        <div className={styles.sun} />
        <div className={styles.hill1} />
        <div className={styles.hill2} />
        <div className={styles.hill3} />
      </div>
    </div>
  );
}
