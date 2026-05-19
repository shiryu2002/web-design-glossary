import type { DemoProps } from '../../../types';
import styles from './StrokeContrastDemo.module.css';

export function StrokeContrastDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.high : styles.low}>Aa</div>
      <div className={styles.note}>
        {mode === 'after' ? 'high contrast（Didone系）' : 'low contrast（均一）'}
      </div>
    </div>
  );
}
