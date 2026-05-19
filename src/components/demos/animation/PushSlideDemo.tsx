import type { DemoProps } from '../../../types';
import styles from './PushSlideDemo.module.css';

export function PushSlideDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.viewport}>
          <div className={`${styles.panel} ${styles.a}`}>A</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.viewport}>
        <div className={styles.strip}>
          <div className={`${styles.panel} ${styles.a}`}>A</div>
          <div className={`${styles.panel} ${styles.b}`}>B</div>
        </div>
      </div>
    </div>
  );
}
