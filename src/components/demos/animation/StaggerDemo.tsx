import type { DemoProps } from '../../../types';
import styles from './StaggerDemo.module.css';

export function StaggerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={styles.bar}
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </div>
  );
}
