import type { DemoProps } from '../../../types';
import styles from './ChatInputDemo.module.css';

export function ChatInputDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.box}>
        <div className={styles.text}>
          このコードを最適化して、計算量を改善してください。
        </div>
        <div className={styles.row}>
          <button className={styles.icon}>📎</button>
          <button className={styles.icon}>🎤</button>
          <span className={styles.count}>34 / 4000</span>
          <button className={styles.send}>
            <span className={styles.tri} />
          </button>
        </div>
      </div>
    </div>
  );
}
