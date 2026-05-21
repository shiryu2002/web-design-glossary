import type { DemoProps } from '../../../types';
import styles from './CognitiveLoadDemo.module.css';

export function CognitiveLoadDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.dense}>
          {Array.from({ length: 14 }).map((_x, i) => (
            <button
              key={i}
              className={styles.tinyBtn}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              項目{i + 1}
            </button>
          ))}
        </div>
        <div className={styles.tag}>選択肢が多すぎ</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.sparse}>
        <button className={styles.primary}>主アクション</button>
        <button className={styles.sub}>後で</button>
      </div>
      <div className={styles.tagOk}>判断負荷 小</div>
    </div>
  );
}
