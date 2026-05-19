import type { DemoProps } from '../../../types';
import styles from './OutlineTextDemo.module.css';

export function OutlineTextDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <span className={mode === 'after' ? styles.outline : styles.solid}>
        OUTLINE
      </span>
    </div>
  );
}
