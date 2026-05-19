import type { DemoProps } from '../../../types';
import styles from './DecoyEffectDemo.module.css';

export function DecoyEffectDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.col}>
        <div className={styles.name}>S</div>
        <div className={styles.price}>¥500</div>
      </div>
      <div className={styles.colDecoy}>
        <div className={styles.name}>M（おとり）</div>
        <div className={styles.price}>¥1,200</div>
      </div>
      <div className={styles.colHi}>
        <div className={styles.name}>L</div>
        <div className={styles.price}>¥1,300</div>
        <div className={styles.tag}>お得！</div>
      </div>
    </div>
  );
}
