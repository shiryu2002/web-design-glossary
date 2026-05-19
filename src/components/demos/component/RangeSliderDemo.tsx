import type { DemoProps } from '../../../types';
import styles from './RangeSliderDemo.module.css';

export function RangeSliderDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.label}>¥ 1,000 〜 ¥ 5,000</div>
      <div className={styles.track}>
        <div className={styles.range} />
        <div className={styles.thumbLeft} />
        <div className={styles.thumbRight} />
      </div>
    </div>
  );
}
