import type { DemoProps } from '../../../types';
import styles from './WordCycleDemo.module.css';

export function WordCycleDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <span className={styles.prefix}>We build</span>
        <span className={styles.static}>apps</span>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <span className={styles.prefix}>We build</span>
      <span className={styles.window}>
        <span className={styles.list}>
          <span>apps</span>
          <span>sites</span>
          <span>tools</span>
          <span>brands</span>
          <span>apps</span>
        </span>
      </span>
    </div>
  );
}
