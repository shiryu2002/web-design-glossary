import type { DemoProps } from '../../../types';
import styles from './ChoiceOverloadDemo.module.css';

export function ChoiceOverloadDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    return (
      <div className={styles.stage}>
        <div className={styles.many}>
          {labels.map((c, i) => (
            <button
              key={c}
              className={styles.btn}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              プラン{c}
            </button>
          ))}
        </div>
        <div className={styles.confused}>どれにしよう…</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.few}>
        <button className={styles.btn}>ベーシック</button>
        <button className={`${styles.btn} ${styles.featured}`}>スタンダード</button>
        <button className={styles.btn}>プロ</button>
      </div>
      <div className={styles.decided}>即決</div>
    </div>
  );
}
