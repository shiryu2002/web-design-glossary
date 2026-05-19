import type { DemoProps } from '../../../types';
import styles from './NeumorphismDemo.module.css';

export function NeumorphismDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.neu : styles.flat;
  return (
    <div className={styles.stage}>
      <div className={`${styles.btn} ${cls}`}>♥</div>
      <div className={`${styles.btn} ${cls}`}>★</div>
      <div className={`${styles.btn} ${cls}`}>◆</div>
    </div>
  );
}
