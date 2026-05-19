import type { DemoProps } from '../../../types';
import styles from './ReciprocityDemo.module.css';

export function ReciprocityDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.gift}>🎁 無料DL</div>
      <div className={styles.arrow}>→</div>
      <div className={styles.feel}>恩を感じる</div>
      <div className={styles.arrow}>→</div>
      <div className={styles.action}>登録 / 購入</div>
    </div>
  );
}
