import type { DemoProps } from '../../../types';
import styles from './MegaFooterDemo.module.css';

const cols = [
  { h: 'Product', items: 4 },
  { h: 'Company', items: 3 },
  { h: 'Resources', items: 3 },
  { h: 'Legal', items: 2 },
];

export function MegaFooterDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.body}>
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <footer className={styles.footer}>
        {cols.map((c, i) => (
          <div className={styles.col} key={i}>
            <div className={styles.head}>{c.h}</div>
            {Array.from({ length: c.items }).map((_, j) => (
              <div className={styles.item} key={j} />
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
}
