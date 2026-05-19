import type { DemoProps } from '../../../types';
import styles from './ConfirmDialogDemo.module.css';

export function ConfirmDialogDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.backdrop} />
      <div className={styles.dialog}>
        <div className={styles.iconWrap}>
          <span className={styles.icon}>!</span>
        </div>
        <div className={styles.title}>本当に削除する？</div>
        <div className={styles.desc}>この操作は元に戻せません。</div>
        <div className={styles.actions}>
          <button className={styles.cancel}>キャンセル</button>
          <button className={styles.danger}>削除</button>
        </div>
      </div>
    </div>
  );
}
