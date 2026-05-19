import type { DemoProps } from '../../../types';
import styles from './DateRangePickerDemo.module.css';

const days = Array.from({ length: 35 }, (_, i) => i - 2);
const startIdx = 10;
const endIdx = 18;

export function DateRangePickerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.head}>
        <span>‹</span>
        <span className={styles.month}>2026年5月</span>
        <span>›</span>
      </div>
      <div className={styles.weekRow}>
        {['日', '月', '火', '水', '木', '金', '土'].map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
      <div className={styles.grid}>
        {days.map((d, i) => {
          const inMonth = d >= 1 && d <= 31;
          const inRange = i >= startIdx && i <= endIdx;
          const isStart = i === startIdx;
          const isEnd = i === endIdx;
          return (
            <div
              key={i}
              className={`${styles.cell} ${inRange ? styles.range : ''} ${
                isStart ? styles.start : ''
              } ${isEnd ? styles.end : ''}`}
            >
              <span className={inMonth ? '' : styles.muted}>
                {inMonth ? d : ''}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
