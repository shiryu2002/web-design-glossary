import type { DemoProps } from '../../../types';
import styles from './StickyHeaderDemo.module.css';

export function StickyHeaderDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.header : styles.headerStatic}>
        Header
      </div>
      <div className={styles.content}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={styles.row}>
            Section {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
