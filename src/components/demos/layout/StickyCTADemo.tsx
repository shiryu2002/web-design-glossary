import type { DemoProps } from '../../../types';
import styles from './StickyCTADemo.module.css';

export function StickyCTADemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.content}>
        <div className={styles.row} />
        <div className={styles.row} />
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <div className={styles.bar}>
        <span>¥980 / 月</span>
        <span className={styles.btn}>登録</span>
      </div>
    </div>
  );
}
