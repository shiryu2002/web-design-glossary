import type { DemoProps } from '../../../types';
import styles from './GlassmorphismDemo.module.css';

export function GlassmorphismDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.glass : styles.plain}>
        <div className={styles.line}>Glass Card</div>
        <div className={styles.lineSub}>frosted look</div>
      </div>
    </div>
  );
}
