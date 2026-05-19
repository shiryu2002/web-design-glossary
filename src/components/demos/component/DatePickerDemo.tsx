import type { DemoProps } from '../../../types';
import styles from './DatePickerDemo.module.css';

export function DatePickerDemo(_: DemoProps) {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  return (
    <div className={styles.stage}>
      <div className={styles.cal}>
        <div className={styles.head}>2026年 5月</div>
        <div className={styles.grid}>
          {days.map((d) => (
            <div className={styles.cellDay} key={d}>{d}</div>
          ))}
          {[null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
            (n, i) => (
              <div
                className={`${styles.cell} ${n === 12 ? styles.selected : ''} ${n === 18 ? styles.today : ''}`}
                key={i}
              >
                {n ?? ''}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
