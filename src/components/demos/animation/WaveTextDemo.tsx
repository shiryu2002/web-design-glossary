import type { DemoProps } from '../../../types';
import styles from './WaveTextDemo.module.css';

export function WaveTextDemo(_: DemoProps) {
  const chars = 'WAVE!'.split('');
  return (
    <div className={styles.stage}>
      <div className={styles.text}>
        {chars.map((c, i) => (
          <span
            key={i}
            className={styles.char}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
