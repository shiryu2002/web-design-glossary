import type { DemoProps } from '../../../types';
import styles from './HalftoneDemo.module.css';

export function HalftoneDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.halftone : styles.solid} />
      <div className={styles.note}>
        {mode === 'after' ? 'halftone / 網点' : 'solid / ベタ'}
      </div>
    </div>
  );
}
