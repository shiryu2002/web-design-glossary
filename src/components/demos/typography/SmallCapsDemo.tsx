import type { DemoProps } from '../../../types';
import styles from './SmallCapsDemo.module.css';

export function SmallCapsDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <span className={mode === 'after' ? styles.caps : styles.plain}>
        Hello World
      </span>
    </div>
  );
}
