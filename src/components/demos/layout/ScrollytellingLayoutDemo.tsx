import type { DemoProps } from '../../../types';
import styles from './ScrollytellingLayoutDemo.module.css';

export function ScrollytellingLayoutDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.sticky}>
        <div className={styles.viz}>◉</div>
        <div className={styles.fixedLabel}>fixed</div>
      </div>
      <div className={styles.scroll}>
        <div className={styles.step}>
          <div className={styles.num}>1</div>
          <div className={styles.cap}>Intro</div>
        </div>
        <div className={`${styles.step} ${styles.active}`}>
          <div className={styles.num}>2</div>
          <div className={styles.cap}>Detail</div>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>3</div>
          <div className={styles.cap}>End</div>
        </div>
      </div>
    </div>
  );
}
