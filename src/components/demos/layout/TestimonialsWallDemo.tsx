import type { DemoProps } from '../../../types';
import styles from './TestimonialsWallDemo.module.css';

const items = [
  { name: 'A. K.', text: 'Saved hours every week.' },
  { name: 'M. T.', text: 'Beautiful and fast.' },
  { name: 'R. S.', text: 'Best in class support.' },
  { name: 'Y. N.', text: 'Onboarding was easy.' },
  { name: 'H. O.', text: 'Worth every yen.' },
  { name: 'K. I.', text: 'My team loves it.' },
];

export function TestimonialsWallDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.wall}>
        {items.map((it, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <div className={styles.text}>{it.text}</div>
            <div className={styles.name}>— {it.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
