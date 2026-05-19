import type { DemoProps } from '../../../types';
import styles from './MarqueeDemo.module.css';

const items = ['NEWS', '◆', 'SALE', '◆', 'EVENT', '◆', '2026', '◆'];

export function MarqueeDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.track}>
        {[...items, ...items, ...items].map((t, i) => (
          <span className={styles.item} key={i}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
