import type { DemoProps } from '../../../types';
import styles from './ResizablePanelDemo.module.css';

export function ResizablePanelDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={styles.left}>
          <div className={styles.head}>サイドバー</div>
          <div className={styles.item}>● 受信箱</div>
          <div className={styles.item}>○ 下書き</div>
          <div className={styles.item}>○ 送信済み</div>
        </div>
        <div className={styles.gripWrap}>
          <div className={styles.grip}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.head}>本文</div>
          <div className={styles.lineLong} />
          <div className={styles.lineLong} />
          <div className={styles.lineShort} />
        </div>
      </div>
    </div>
  );
}
