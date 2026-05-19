import type { DemoProps } from '../../../types';
import styles from './CTABannerDemo.module.css';

export function CTABannerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.banner}>
        <div className={styles.text}>
          <div className={styles.title}>今すぐ始めよう</div>
          <div className={styles.sub}>30日無料トライアル</div>
        </div>
        <div className={styles.btn}>登録する →</div>
      </div>
    </div>
  );
}
