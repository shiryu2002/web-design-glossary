import type { DemoProps } from '../../../types';
import styles from './PulseDemo.module.css';

export function PulseDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.pulse : '';
  return (
    <div className={styles.stage}>
      <div className={`${styles.dot} ${cls}`} />
    </div>
  );
}
