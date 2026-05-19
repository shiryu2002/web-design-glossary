import type { DemoProps } from '../../../types';
import styles from './VonRestorffDemo.module.css';

export function VonRestorffDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={styles.btnNormal}>Cancel</div>
        <div className={styles.btnNormal}>Later</div>
        <div className={styles.btnHi}>Save</div>
        <div className={styles.btnNormal}>Help</div>
        <div className={styles.btnNormal}>Info</div>
      </div>
      <div className={styles.label}>異なるものが記憶に残る</div>
    </div>
  );
}
