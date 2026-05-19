import type { DemoProps } from '../../../types';
import styles from './FollowThroughDemo.module.css';

export function FollowThroughDemo({ mode = 'after' }: DemoProps) {
  const enabled = mode === 'after';
  return (
    <div className={styles.stage}>
      <div className={styles.pole}>
        <span className={`${styles.seg} ${styles.s1} ${enabled ? styles.on : ''}`} />
        <span className={`${styles.seg} ${styles.s2} ${enabled ? styles.on : ''}`} />
        <span className={`${styles.seg} ${styles.s3} ${enabled ? styles.on : ''}`} />
      </div>
    </div>
  );
}
