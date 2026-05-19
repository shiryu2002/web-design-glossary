import type { DemoProps } from '../../../types';
import styles from './ParticleDemo.module.css';

export function ParticleDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {Array.from({ length: 24 }).map((_, i) => {
        const left = (i * 13) % 100;
        const delay = (i * 0.18) % 4;
        const size = 3 + ((i * 3) % 4);
        return (
          <span
            key={i}
            className={styles.dot}
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}
    </div>
  );
}
