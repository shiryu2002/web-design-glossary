import type { DemoProps } from '../../../types';
import styles from './IntrinsicGridDemo.module.css';

export function IntrinsicGridDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        <div className={styles.label}>Name</div>
        <div className={styles.value}>Aki Tanaka</div>
        <div className={styles.label}>Email</div>
        <div className={styles.value}>aki@example.com</div>
        <div className={styles.label}>Role</div>
        <div className={styles.value}>Engineer</div>
      </div>
      <div className={styles.caption}>min-content / 1fr</div>
    </div>
  );
}
