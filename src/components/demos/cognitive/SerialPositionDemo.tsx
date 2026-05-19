import type { DemoProps } from '../../../types';
import styles from './SerialPositionDemo.module.css';

const items = ['Apple', 'Bag', 'Cat', 'Dog', 'Egg', 'Fish', 'Goat', 'Hat'];

export function SerialPositionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 200 70" className={styles.curve}>
        <path d="M 10 20 Q 100 65 190 20" fill="none" stroke="var(--accent)" strokeWidth="2" />
      </svg>
      <div className={styles.list}>
        {items.map((it, i) => {
          const edge = i === 0 || i === items.length - 1;
          return <div key={it} className={edge ? styles.edge : styles.mid}>{it}</div>;
        })}
      </div>
    </div>
  );
}
