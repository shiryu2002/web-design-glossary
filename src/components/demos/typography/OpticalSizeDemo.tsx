import type { DemoProps } from '../../../types';
import styles from './OpticalSizeDemo.module.css';

export function OpticalSizeDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.large}>Aa</div>
        <div className={styles.smallSame}>Aa</div>
        <div className={styles.note}>同一字形を縮小（before）</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.large}>Aa</div>
      <div className={styles.smallOptical}>Aa</div>
      <div className={styles.note}>小サイズ用にチューニング（after）</div>
    </div>
  );
}
