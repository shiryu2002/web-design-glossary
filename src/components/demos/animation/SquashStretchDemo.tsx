import type { DemoProps } from '../../../types';
import styles from './SquashStretchDemo.module.css';

export function SquashStretchDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.squashy : styles.rigid;
  return (
    <div className={styles.stage}>
      <div className={`${styles.ball} ${cls}`} />
      <div className={styles.ground} />
    </div>
  );
}
