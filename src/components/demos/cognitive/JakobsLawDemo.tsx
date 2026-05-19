import type { DemoProps } from '../../../types';
import styles from './JakobsLawDemo.module.css';

export function JakobsLawDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.row}>
          <span>Logo</span>
          <span className={styles.nav}>Home　Docs　Login</span>
          <span className={styles.search}>🔍</span>
        </div>
      </div>
      <div className={styles.label}>慣れた配置 = 学習コストなし</div>
    </div>
  );
}
