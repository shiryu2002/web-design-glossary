import type { DemoProps } from '../../../types';
import styles from './CalendarGridDemo.module.css';

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export function CalendarGridDemo(_: DemoProps) {
  const days: (number | null)[] = [];
  for (let i = 0; i < 3; i++) days.push(null);
  for (let d = 1; d <= 28; d++) days.push(d);

  return (
    <div className={styles.stage}>
      <div className={styles.month}>May 2026</div>
      <div className={styles.grid}>
        {weekdays.map((w, i) => (
          <div key={`w${i}`} className={styles.wd}>{w}</div>
        ))}
        {days.map((d, i) => (
          <div key={i} className={`${styles.day} ${d === 19 ? styles.today : ''}`}>
            {d ?? ''}
          </div>
        ))}
      </div>
    </div>
  );
}
