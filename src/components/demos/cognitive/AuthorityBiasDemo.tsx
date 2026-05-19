import type { DemoProps } from '../../../types';
import styles from './AuthorityBiasDemo.module.css';

export function AuthorityBiasDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.badge}>🏆 GOOD DESIGN 2026</div>
      <div className={styles.card}>
        <div className={styles.line}>医師監修</div>
        <div className={styles.line}>専門家おすすめ</div>
      </div>
    </div>
  );
}
