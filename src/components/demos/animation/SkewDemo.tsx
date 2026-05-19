import type { DemoProps } from '../../../types';
import styles from './SkewDemo.module.css';

export function SkewDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.skewed : '';
  return (
    <div className={styles.stage}>
      <div className={`${styles.box} ${cls}`}>FAST</div>
    </div>
  );
}
