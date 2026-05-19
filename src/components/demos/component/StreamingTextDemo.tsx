import type { DemoProps } from '../../../types';
import styles from './StreamingTextDemo.module.css';

export function StreamingTextDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bubble}>
        <div className={styles.role}>
          <span className={styles.dot} />
          AI Assistant
        </div>
        <div className={styles.text}>
          はい、その問題は再帰呼び出しの深さに起因しています。
          メモ化を使うことで計算量を O(n²) から O(n) まで削減でき
          <span className={styles.caret} />
        </div>
      </div>
    </div>
  );
}
