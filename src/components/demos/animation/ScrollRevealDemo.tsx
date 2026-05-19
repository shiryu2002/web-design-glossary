import type { DemoProps } from '../../../types';
import styles from './ScrollRevealDemo.module.css';

export function ScrollRevealDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.reveal : styles.static;
  return (
    <div className={styles.stage}>
      <div className={`${styles.block} ${cls}`} style={{ animationDelay: '0s' }}>
        Block 1
      </div>
      <div className={`${styles.block} ${cls}`} style={{ animationDelay: '0.25s' }}>
        Block 2
      </div>
      <div className={`${styles.block} ${cls}`} style={{ animationDelay: '0.5s' }}>
        Block 3
      </div>
    </div>
  );
}
