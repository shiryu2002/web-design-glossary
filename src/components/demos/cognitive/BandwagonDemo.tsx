import type { DemoProps } from '../../../types';
import styles from './BandwagonDemo.module.css';

export function BandwagonDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.tag}>人気No.1</div>
      <div className={styles.num}>100,000+</div>
      <div className={styles.label}>ユーザーが登録済み</div>
    </div>
  );
}
