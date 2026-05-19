import type { DemoProps } from '../../../types';
import styles from './GestaltCommonFateDemo.module.css';

export function GestaltCommonFateDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {Array.from({ length: 15 }).map((_, i) => (
        <span
          key={i}
          className={`${styles.dot} ${i % 3 === 0 ? styles.moving : ''}`}
        />
      ))}
    </div>
  );
}
