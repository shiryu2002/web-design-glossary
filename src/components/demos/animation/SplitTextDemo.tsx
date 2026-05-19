import type { DemoProps } from '../../../types';
import styles from './SplitTextDemo.module.css';

const WORDS = ['Move', 'with', 'meaning'];

export function SplitTextDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.line}>{WORDS.join(' ')}</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.line}>
        {WORDS.map((w, i) => (
          <span key={i} className={styles.word} style={{ animationDelay: `${i * 0.15}s` }}>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
