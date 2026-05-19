import type { DemoProps } from '../../../types';
import styles from './LetterSpacingDemo.module.css';

export function LetterSpacingDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.wide : styles.normal}>
        SPACING
      </div>
    </div>
  );
}
