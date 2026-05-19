import type { DemoProps } from '../../../types';
import styles from './ConfettiDemo.module.css';

const colors = ['#ff5d8f', '#ffcf6f', '#6cd49c', '#5b4ee3', '#3ad8ff'];

export function ConfettiDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {Array.from({ length: 30 }).map((_, i) => {
        const color = colors[i % colors.length];
        const left = (i * 7.3) % 100;
        const delay = (i * 0.07) % 2;
        const dur = 1.6 + ((i * 0.13) % 1.4);
        const w = 6 + ((i * 3) % 8);
        const h = 10 + ((i * 5) % 8);
        return (
          <span
            key={i}
            className={styles.piece}
            style={{
              left: `${left}%`,
              background: color,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
              width: `${w}px`,
              height: `${h}px`,
            }}
          />
        );
      })}
      <div className={styles.label}>🎉 Congrats!</div>
    </div>
  );
}
