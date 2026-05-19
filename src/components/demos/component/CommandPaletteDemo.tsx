import type { DemoProps } from '../../../types';
import styles from './CommandPaletteDemo.module.css';

export function CommandPaletteDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.palette}>
        <div className={styles.input}>
          <span className={styles.icon}>🔍</span>
          <span className={styles.placeholder}>コマンドを検索...</span>
        </div>
        <div className={styles.list}>
          <div className={`${styles.row} ${styles.rowActive}`}>
            <span>新規ファイル</span>
            <span className={styles.kbd}>⌘N</span>
          </div>
          <div className={styles.row}>
            <span>設定を開く</span>
            <span className={styles.kbd}>⌘,</span>
          </div>
          <div className={styles.row}>
            <span>ターミナル</span>
            <span className={styles.kbd}>⌃`</span>
          </div>
        </div>
      </div>
    </div>
  );
}
