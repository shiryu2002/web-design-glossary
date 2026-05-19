import type { DemoProps } from '../../../types';
import styles from './EndowmentDemo.module.css';

export function EndowmentDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.cart}>
        <div className={styles.icon}>🛒</div>
        <div className={styles.items}>
          <div className={styles.item} />
          <div className={styles.item} />
          <div className={styles.item} />
        </div>
      </div>
      <div className={styles.label}>「自分のもの」と感じると手放しにくい</div>
    </div>
  );
}
