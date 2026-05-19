import type { DemoProps } from '../../../types';
import styles from './ColorContrastDemo.module.css';

export function ColorContrastDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.good : styles.bad}>
        Sample Text
      </div>
      <div className={styles.label}>
        {mode === 'after' ? 'AAA / 高コントラスト' : 'NG / 低コントラスト'}
      </div>
    </div>
  );
}
