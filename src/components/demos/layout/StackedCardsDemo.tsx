import type { DemoProps } from '../../../types';
import styles from './StackedCardsDemo.module.css';

export function StackedCardsDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.card} ${styles.back}`} />
      <div className={`${styles.card} ${styles.mid}`} />
      <div className={`${styles.card} ${styles.front}`}>
        <div className={styles.title}>Top card</div>
        <div className={styles.body}>3 more behind</div>
      </div>
    </div>
  );
}
