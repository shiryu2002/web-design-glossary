import type { DemoProps } from '../../../types';
import styles from './TimelineDemo.module.css';

const events = [
  { d: '2024', t: '創業' },
  { d: '2025', t: 'シリーズA' },
  { d: '2026', t: '海外展開' },
];

export function TimelineDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <ol className={styles.timeline}>
        {events.map((e, i) => (
          <li className={styles.item} key={i}>
            <span className={styles.dot} />
            <span className={styles.year}>{e.d}</span>
            <span className={styles.text}>{e.t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
