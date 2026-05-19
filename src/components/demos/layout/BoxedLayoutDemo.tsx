import type { DemoProps } from '../../../types';
import styles from './BoxedLayoutDemo.module.css';

export function BoxedLayoutDemo({ mode = 'after' }: DemoProps) {
  const isAfter = mode === 'after';
  return (
    <div className={`${styles.stage} ${isAfter ? styles.boxed : styles.full}`}>
      <div className={styles.box}>
        <div className={styles.bar} />
        <div className={styles.body}>
          <div className={styles.line} />
          <div className={styles.line} style={{ width: '80%' }} />
          <div className={styles.line} style={{ width: '60%' }} />
        </div>
      </div>
      <div className={styles.label}>{isAfter ? 'boxed (max-width)' : 'full width'}</div>
    </div>
  );
}
