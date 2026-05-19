import type { DemoProps } from '../../../types';
import styles from './OvershootDemo.module.css';

export function OvershootDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.over : styles.linear;
  return (
    <div className={styles.stage}>
      <div className={styles.track}>
        <span className={styles.goal} />
        <div className={`${styles.box} ${cls}`} />
      </div>
    </div>
  );
}
