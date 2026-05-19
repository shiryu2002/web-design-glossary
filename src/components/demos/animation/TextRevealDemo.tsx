import type { DemoProps } from '../../../types';
import styles from './TextRevealDemo.module.css';

export function TextRevealDemo({ mode = 'after' }: DemoProps) {
  const chars = 'REVEAL'.split('');
  return (
    <div className={styles.stage}>
      <div className={styles.text}>
        {chars.map((c, i) => (
          <span
            key={i}
            className={mode === 'after' ? styles.char : styles.charStatic}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
