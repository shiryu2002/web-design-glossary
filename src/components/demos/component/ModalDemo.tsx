import type { DemoProps } from '../../../types';
import styles from './ModalDemo.module.css';

export function ModalDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bg}>
        <div className={styles.row} />
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <div className={styles.overlay} />
      <div className={styles.dialog}>
        <div className={styles.title}>確認</div>
        <div className={styles.body}>削除しますか？</div>
        <div className={styles.actions}>
          <span className={styles.btnGhost}>キャンセル</span>
          <span className={styles.btn}>削除</span>
        </div>
      </div>
    </div>
  );
}
