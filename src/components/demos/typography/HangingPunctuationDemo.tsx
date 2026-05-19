import type { DemoProps } from '../../../types';
import styles from './HangingPunctuationDemo.module.css';

export function HangingPunctuationDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <p className={mode === 'after' ? styles.hang : styles.plain}>
        「これがぶら下げの例。記号が外に出る。」
      </p>
    </div>
  );
}
