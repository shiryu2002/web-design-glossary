import type { DemoProps } from '../../../types';
import styles from './BannerBlindnessDemo.module.css';

export function BannerBlindnessDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.banner}>
        <span>🎉 セール中！クリック！</span>
      </div>
      <div className={styles.content}>
        <div className={styles.row} />
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <div className={styles.gaze}>👁 視線</div>
    </div>
  );
}
