import type { DemoProps } from '../../../types';
import styles from './LossAversionDemo.module.css';

export function LossAversionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.gain}>+¥500 獲得</div>
      <div className={styles.eq}>≠</div>
      <div className={styles.loss}>−¥500 喪失</div>
      <div className={styles.note}>失う痛み &gt; 得る喜び（約2倍）</div>
    </div>
  );
}
