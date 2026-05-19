import type { DemoProps } from '../../../types';
import styles from './DarkModeDemo.module.css';

export function DarkModeDemo({ mode = 'after' }: DemoProps) {
  const dark = mode === 'after';
  return (
    <div className={`${styles.stage} ${dark ? styles.dark : styles.light}`}>
      <div className={styles.card}>
        <div className={styles.title}>Card</div>
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  );
}
