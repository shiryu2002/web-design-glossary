import type { DemoProps } from '../../../types';
import styles from './ShadesDemo.module.css';

export function ShadesDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.row}>
          <div className={styles.base} />
        </div>
        <div className={styles.label}>base のみ</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={styles.base} />
        <div className={styles.s1} />
        <div className={styles.s2} />
        <div className={styles.s3} />
        <div className={styles.s4} />
      </div>
      <div className={styles.label}>+ black = shades</div>
    </div>
  );
}
