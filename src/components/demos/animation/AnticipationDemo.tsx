import type { DemoProps } from '../../../types';
import styles from './AnticipationDemo.module.css';

export function AnticipationDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.anticipate : styles.plain;
  return (
    <div className={styles.stage}>
      <button className={`${styles.btn} ${cls}`}>Press</button>
    </div>
  );
}
