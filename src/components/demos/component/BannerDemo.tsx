import type { DemoProps } from '../../../types';
import styles from './BannerDemo.module.css';

export function BannerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.banner}>
        <span className={styles.icon}>ⓘ</span>
        <span className={styles.text}>新バージョンがあります</span>
        <span className={styles.action}>更新する</span>
        <span className={styles.close}>✕</span>
      </div>
      <div className={styles.content}>
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
    </div>
  );
}
