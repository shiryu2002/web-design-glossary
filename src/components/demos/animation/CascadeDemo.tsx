import type { DemoProps } from '../../../types';
import styles from './CascadeDemo.module.css';

export function CascadeDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={styles.card}
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  );
}
