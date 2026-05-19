import type { DemoProps } from '../../../types';
import styles from './HoverRevealDemo.module.css';

export function HoverRevealDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.cover}>Project</div>
        <div className={styles.overlay}>
          <div className={styles.title}>Read More →</div>
          <div className={styles.sub}>Hover to reveal</div>
        </div>
      </div>
    </div>
  );
}
