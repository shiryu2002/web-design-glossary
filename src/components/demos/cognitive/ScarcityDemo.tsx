import type { DemoProps } from '../../../types';
import styles from './ScarcityDemo.module.css';

export function ScarcityDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.alert}>残り 3 個</div>
      <div className={styles.timer}>セール終了まで 02:14:35</div>
    </div>
  );
}
