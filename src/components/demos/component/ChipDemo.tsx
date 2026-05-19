import type { DemoProps } from '../../../types';
import styles from './ChipDemo.module.css';

const chips = [
  { label: 'React', closable: true },
  { label: 'TypeScript', closable: true },
  { label: 'CSS', closable: false, active: true },
  { label: 'デザイン', closable: false },
];

export function ChipDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {chips.map((c, i) => (
        <span
          key={i}
          className={`${styles.chip} ${c.active ? styles.active : ''}`}
        >
          {c.label}
          {c.closable && <span className={styles.close}>✕</span>}
        </span>
      ))}
    </div>
  );
}
