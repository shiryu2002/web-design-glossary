import type { DemoProps } from '../../../types';
import styles from './InertiaDemo.module.css';

export function InertiaDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.inertia : styles.stop;
  return (
    <div className={styles.stage}>
      <div className={`${styles.puck} ${cls}`} />
    </div>
  );
}
