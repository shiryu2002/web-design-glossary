import type { DemoProps } from '../../../types';
import styles from './SmoothScrollDemo.module.css';

export function SmoothScrollDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.content}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div className={styles.section} key={i}>Section {i + 1}</div>
        ))}
      </div>
    </div>
  );
}
