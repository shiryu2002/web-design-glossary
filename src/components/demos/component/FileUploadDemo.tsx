import type { DemoProps } from '../../../types';
import styles from './FileUploadDemo.module.css';

export function FileUploadDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.dropzone}>
        <div className={styles.icon}>⬆</div>
        <div className={styles.title}>ドラッグ&ドロップ</div>
        <div className={styles.sub}>または<span className={styles.link}>クリックして選択</span></div>
      </div>
    </div>
  );
}
