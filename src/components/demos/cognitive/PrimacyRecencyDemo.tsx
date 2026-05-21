import type { DemoProps } from '../../../types';
import styles from './PrimacyRecencyDemo.module.css';

const items = ['Apple', 'Bag', 'Cat', 'Dog', 'Egg', 'Fish', 'Goat'];

export function PrimacyRecencyDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.list}>
        {items.map((it, i) => {
          const isEdge = i === 0 || i === items.length - 1;
          return (
            <div
              key={it}
              className={`${styles.row} ${isEdge ? styles.edge : styles.middle}`}
              style={!isEdge ? { animationDelay: `${i * 0.15}s` } : undefined}
            >
              {it}
            </div>
          );
        })}
      </div>
      <div className={styles.label}>中間は忘れ、最初と最後が残る</div>
    </div>
  );
}
