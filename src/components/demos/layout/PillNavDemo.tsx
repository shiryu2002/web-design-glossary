import type { DemoProps } from '../../../types';
import styles from './PillNavDemo.module.css';

const items = ['Home', 'Work', 'Blog', 'About', 'Contact'];

export function PillNavDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <nav className={styles.pill}>
        {items.map((it, i) => (
          <div key={it} className={`${styles.item} ${i === 1 ? styles.active : ''}`}>{it}</div>
        ))}
      </nav>
    </div>
  );
}
