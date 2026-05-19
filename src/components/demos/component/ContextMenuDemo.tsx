import type { DemoProps } from '../../../types';
import styles from './ContextMenuDemo.module.css';

export function ContextMenuDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.surface}>
        <div className={styles.cursor}>↖</div>
        <div className={styles.menu}>
          <div className={styles.item}>
            <span>切り取り</span>
            <span className={styles.shortcut}>⌘X</span>
          </div>
          <div className={styles.item}>
            <span>コピー</span>
            <span className={styles.shortcut}>⌘C</span>
          </div>
          <div className={`${styles.item} ${styles.hover}`}>
            <span>貼り付け</span>
            <span className={styles.shortcut}>⌘V</span>
          </div>
          <div className={styles.sep} />
          <div className={`${styles.item} ${styles.danger}`}>
            <span>削除</span>
          </div>
        </div>
      </div>
    </div>
  );
}
