import type { DemoProps } from '../../../types';
import styles from './MenubarDemo.module.css';

const menus = ['File', 'Edit', 'View', 'Help'];
const fileItems = [
  { l: 'New', s: '⌘N' },
  { l: 'Open…', s: '⌘O' },
  { l: 'Save', s: '⌘S' },
];

export function MenubarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bar}>
        {menus.map((m, i) => (
          <span
            key={m}
            className={`${styles.item} ${i === 0 ? styles.active : ''}`}
          >
            {m}
          </span>
        ))}
      </div>
      <div className={styles.dropdown}>
        {fileItems.map((it) => (
          <div key={it.l} className={styles.row}>
            <span>{it.l}</span>
            <span className={styles.shortcut}>{it.s}</span>
          </div>
        ))}
        <div className={styles.sep} />
        <div className={styles.row}>
          <span>Close</span>
          <span className={styles.shortcut}>⌘W</span>
        </div>
      </div>
    </div>
  );
}
