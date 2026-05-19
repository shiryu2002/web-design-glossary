import type { DemoProps } from '../../../types';
import styles from './GlitchDemo.module.css';

export function GlitchDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <span className={styles.plain}>GLITCH</span>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <span className={styles.glitch} data-text="GLITCH">
        GLITCH
      </span>
    </div>
  );
}
