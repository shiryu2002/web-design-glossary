import type { DemoProps } from '../../../types';
import styles from './TeslersLawDemo.module.css';

export function TeslersLawDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      {mode === 'after' ? (
        <div className={styles.card}>
          <div className={styles.input}>東京駅 100-0005</div>
          <div className={styles.hint}>システムが自動補完</div>
        </div>
      ) : (
        <div className={styles.card}>
          <div className={styles.input}>郵便番号</div>
          <div className={styles.input}>都道府県</div>
          <div className={styles.input}>市区町村</div>
        </div>
      )}
    </div>
  );
}
