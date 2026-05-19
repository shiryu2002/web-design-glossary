import type { DemoProps } from '../../../types';
import styles from './TypewriterDemo.module.css';

export function TypewriterDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <span className={styles.full}>Hello, world!</span>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.typewriter}>
        <span className={styles.text}>Hello, world!</span>
      </div>
    </div>
  );
}
