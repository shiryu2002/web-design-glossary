import type { DemoProps } from '../../../types';
import styles from './ThreePaneDemo.module.css';

export function ThreePaneDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.folders}>
        <div className={styles.fItem}>📥 Inbox</div>
        <div className={`${styles.fItem} ${styles.active}`}>★ Starred</div>
        <div className={styles.fItem}>📤 Sent</div>
        <div className={styles.fItem}>🗑 Trash</div>
      </div>
      <div className={styles.list}>
        <div className={styles.lItem}>
          <div className={styles.from}>Aki</div>
          <div className={styles.subj}>Meeting at 3pm</div>
        </div>
        <div className={`${styles.lItem} ${styles.sel}`}>
          <div className={styles.from}>Mio</div>
          <div className={styles.subj}>Design review</div>
        </div>
        <div className={styles.lItem}>
          <div className={styles.from}>Ren</div>
          <div className={styles.subj}>Quick question</div>
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.subject}>Design review</div>
        <div className={styles.meta}>From Mio</div>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} style={{ width: '60%' }} />
      </div>
    </div>
  );
}
