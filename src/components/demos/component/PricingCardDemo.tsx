import type { DemoProps } from '../../../types';
import styles from './PricingCardDemo.module.css';

export function PricingCardDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.tier}>PRO</div>
        <div className={styles.price}>
          ¥<span className={styles.amount}>980</span>
          <span className={styles.month}>/月</span>
        </div>
        <ul className={styles.feats}>
          <li>✓ 無制限プロジェクト</li>
          <li>✓ 優先サポート</li>
          <li>✓ 高度な分析</li>
        </ul>
        <div className={styles.btn}>始める</div>
      </div>
    </div>
  );
}
