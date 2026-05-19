import type { DemoProps } from '../../../types';
import styles from './TextShadowDemo.module.css';

export function TextShadowDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <span className={mode === 'after' ? styles.shadow : styles.plain}>
        Shadow
      </span>
    </div>
  );
}
