import type { DemoProps } from '../../../types';
import styles from './GradientTextDemo.module.css';

export function GradientTextDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <span className={mode === 'after' ? styles.grad : styles.plain}>
        Gradient
      </span>
    </div>
  );
}
