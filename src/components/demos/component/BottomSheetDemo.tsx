import type { DemoProps } from '../../../types';
import styles from './BottomSheetDemo.module.css';

export function BottomSheetDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bg}>
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <div className={styles.scrim} />
      <div className={styles.sheet}>
        <div className={styles.grip} />
        <div className={styles.title}>共有</div>
        <div className={styles.iconRow}>
          <div className={styles.appIcon}>💬</div>
          <div className={styles.appIcon}>📷</div>
          <div className={styles.appIcon}>🎵</div>
          <div className={styles.appIcon}>🔗</div>
        </div>
      </div>
    </div>
  );
}
