import type { DemoProps } from '../../../types';
import styles from './MasonryDemo.module.css';

const heights = [60, 90, 110, 70, 100, 80, 120, 65, 90];
const colors = ['#f4d6b0', '#c3d9f0', '#d8efd0', '#f0c8d4', '#e6e0fb', '#fde8b8', '#d0e7e1', '#f4cdd6', '#cfd6f0'];

export function MasonryDemo(_: DemoProps) {
  return (
    <div className={styles.column}>
      {heights.map((h, i) => (
        <div
          className={styles.cell}
          key={i}
          style={{ height: `${h}px`, background: colors[i % colors.length] }}
        />
      ))}
    </div>
  );
}
