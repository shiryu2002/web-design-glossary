import type { DemoProps } from '../../../types';
import styles from './SnackbarDemo.module.css';

export function SnackbarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bg}>
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <div className={styles.snackbar}>
        <span>1 件削除しました</span>
        <span className={styles.action}>元に戻す</span>
      </div>
    </div>
  );
}
