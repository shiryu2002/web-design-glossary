import type { DemoProps } from '../../../types';
import styles from './CalendarComponentDemo.module.css';

const days = Array.from({ length: 35 }, (_, i) => i - 2);
const events: Record<number, { c: string; t: string }[]> = {
  5: [{ c: 'a', t: '会議' }],
  9: [{ c: 'b', t: '締切' }],
  14: [{ c: 'a', t: '面談' }],
  19: [
    { c: 'c', t: '研修' },
    { c: 'a', t: '夕会' },
  ],
  23: [{ c: 'b', t: '提出' }],
};

export function CalendarComponentDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.head}>5月 2026</div>
      <div className={styles.grid}>
        {days.map((d, i) => {
          const inMonth = d >= 1 && d <= 31;
          const evts = inMonth ? events[d] : undefined;
          return (
            <div key={i} className={styles.cell}>
              <div
                className={`${styles.date} ${inMonth ? '' : styles.muted} ${
                  d === 14 ? styles.today : ''
                }`}
              >
                {inMonth ? d : ''}
              </div>
              {evts &&
                evts.map((e, j) => (
                  <div key={j} className={`${styles.pill} ${styles[e.c]}`}>
                    {e.t}
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
