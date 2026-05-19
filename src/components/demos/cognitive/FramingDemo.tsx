import type { DemoProps } from '../../../types';
import styles from './FramingDemo.module.css';

export function FramingDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.positive : styles.negative}>
        {mode === 'after' ? '95% 成功' : '5% 失敗'}
      </div>
      <div className={styles.note}>同じ事実 違う印象</div>
    </div>
  );
}
