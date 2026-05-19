import type { DemoProps } from '../../../types';
import styles from './CarouselDemo.module.css';

const slides = [
  { c: '#ff7a59', t: '1' },
  { c: '#5b4ee3', t: '2' },
  { c: '#6cd49c', t: '3' },
  { c: '#ffcf6f', t: '4' },
];

export function CarouselDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.track}>
        {[...slides, ...slides].map((s, i) => (
          <div className={styles.slide} key={i} style={{ background: s.c }}>
            {s.t}
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        <span className={styles.dotActive} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
}
