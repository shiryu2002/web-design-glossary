import type { DemoProps } from '../../../types';
import styles from './CardGridDemo.module.css';

const colors = ['#f4d6b0', '#c3d9f0', '#d8efd0', '#f0c8d4', '#e6e0fb', '#fde8b8'];

export function CardGridDemo(_: DemoProps) {
  return (
    <div className={styles.grid}>
      {colors.map((c, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.thumb} style={{ background: c }} />
          <div className={styles.line} />
          <div className={styles.lineShort} />
        </div>
      ))}
    </div>
  );
}
