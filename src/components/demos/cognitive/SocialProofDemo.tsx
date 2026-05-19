import type { DemoProps } from '../../../types';
import styles from './SocialProofDemo.module.css';

export function SocialProofDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.stars}>★★★★★</div>
      <div className={styles.count}>4.9 / 1,243 レビュー</div>
      <div className={styles.live}>● 今この商品を5人が見ています</div>
    </div>
  );
}
