import type { DemoProps } from '../../../types';
import styles from './MaterialDesignDemo.module.css';

export function MaterialDesignDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Card</div>
        <div className={styles.cardSub}>elevated surface</div>
      </div>
      <button type="button" className={styles.fab} aria-label="add">+</button>
    </div>
  );
}
