import type { DemoProps } from '../../../types';
import styles from './SheetDemo.module.css';

export function SheetDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bg}>
        <div className={styles.placeholder}>
          <div className={styles.dim} />
          <div className={styles.dim} />
          <div className={styles.dim} style={{ width: '60%' }} />
        </div>
      </div>
      <div className={styles.backdrop} />
      <div className={styles.sheet}>
        <div className={styles.head}>
          <span className={styles.title}>設定</span>
          <span className={styles.close}>×</span>
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <span>通知</span>
            <div className={styles.toggle}>
              <span />
            </div>
          </div>
          <div className={styles.row}>
            <span>ダークモード</span>
            <div className={`${styles.toggle} ${styles.off}`}>
              <span />
            </div>
          </div>
          <div className={styles.row}>
            <span>言語</span>
            <span className={styles.muted}>日本語 ›</span>
          </div>
        </div>
      </div>
    </div>
  );
}
