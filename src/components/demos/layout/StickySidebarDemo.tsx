import type { DemoProps } from '../../../types';
import styles from './StickySidebarDemo.module.css';

export function StickySidebarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.aside}>
        <div className={styles.nav}>目次</div>
        <div className={styles.navItem}>1. 概要</div>
        <div className={`${styles.navItem} ${styles.active}`}>2. 詳細</div>
        <div className={styles.navItem}>3. まとめ</div>
      </div>
      <div className={styles.main}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div className={styles.row} key={i} />
        ))}
      </div>
    </div>
  );
}
