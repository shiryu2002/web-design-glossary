import type { DemoProps } from '../../../types';
import styles from './GanttDemo.module.css';

const tasks = [
  { name: '設計', start: 0, len: 3, c: 'a' },
  { name: '実装', start: 2, len: 5, c: 'b' },
  { name: 'QA', start: 6, len: 2, c: 'c' },
  { name: 'リリース', start: 8, len: 1, c: 'd' },
];

export function GanttDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.headRow}>
        <div className={styles.label} />
        <div className={styles.scale}>
          {['W1', 'W2', 'W3', 'W4', 'W5'].map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
      </div>
      {tasks.map((t) => (
        <div key={t.name} className={styles.row}>
          <div className={styles.label}>{t.name}</div>
          <div className={styles.track}>
            <div
              className={`${styles.bar} ${styles[t.c]}`}
              style={{
                left: `${(t.start / 10) * 100}%`,
                width: `${(t.len / 10) * 100}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
