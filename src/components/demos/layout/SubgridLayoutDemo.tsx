import type { DemoProps } from '../../../types';
import styles from './SubgridLayoutDemo.module.css';

export function SubgridLayoutDemo({ mode = 'after' }: DemoProps) {
  const isAfter = mode === 'after';
  return (
    <div className={styles.stage}>
      <div className={`${styles.grid} ${isAfter ? styles.subgrid : styles.normal}`}>
        <div className={styles.card}>
          <div className={styles.title}>Short title</div>
          <div className={styles.body}>Body text here for the first card.</div>
          <div className={styles.foot}>Foot</div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>A bit longer title here</div>
          <div className={styles.body}>Body.</div>
          <div className={styles.foot}>Foot</div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>Title</div>
          <div className={styles.body}>Longer body that spans across two lines.</div>
          <div className={styles.foot}>Foot</div>
        </div>
      </div>
      <div className={styles.label}>{isAfter ? 'subgrid: rows aligned' : 'normal: rows misaligned'}</div>
    </div>
  );
}
