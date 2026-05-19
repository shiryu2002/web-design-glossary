import type { DemoProps } from '../../../types';
import styles from './PopoverDemo.module.css';

export function PopoverDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.wrap}>
        <button className={styles.trigger}>···</button>
        <div className={styles.popover}>
          <div className={styles.item}>✎ 編集</div>
          <div className={styles.item}>🗗 複製</div>
          <div className={styles.divider} />
          <div className={`${styles.item} ${styles.danger}`}>🗑 削除</div>
        </div>
      </div>
    </div>
  );
}
