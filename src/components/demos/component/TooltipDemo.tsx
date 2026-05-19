import type { DemoProps } from '../../../types';
import styles from './TooltipDemo.module.css';

export function TooltipDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.wrap}>
        <div className={styles.tooltip}>削除する</div>
        <button className={styles.btn} aria-label="削除">🗑</button>
      </div>
    </div>
  );
}
