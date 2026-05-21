import type { DemoProps } from '../../../types';
import styles from './SerialPositionDemo.module.css';

const items = ['Apple', 'Bag', 'Cat', 'Dog', 'Egg', 'Fish', 'Goat', 'Hat'];

export function SerialPositionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 200 80" className={styles.curve} preserveAspectRatio="none">
        <path
          className={styles.line}
          d="M 10 18 Q 60 70 100 60 T 190 18"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle className={styles.dotL} cx="10" cy="18" r="3.5" fill="var(--accent)" />
        <circle className={styles.dotR} cx="190" cy="18" r="3.5" fill="var(--accent)" />
      </svg>
      <div className={styles.list}>
        {items.map((it, i) => {
          const edge = i === 0 || i === items.length - 1;
          return (
            <div key={it} className={edge ? styles.edge : styles.mid}>
              {it}
            </div>
          );
        })}
      </div>
      <div className={styles.axis}>記憶定着率</div>
    </div>
  );
}
