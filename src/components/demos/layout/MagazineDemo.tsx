import type { DemoProps } from '../../../types';
import styles from './MagazineDemo.module.css';

export function MagazineDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.head}>
        <div className={styles.kicker}>FEATURE</div>
        <div className={styles.title}>BIG HEADLINE</div>
      </div>
      <div className={styles.cols}>
        <div className={styles.col}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.lineShort} />
        </div>
        <div className={styles.col}>
          <div className={styles.line} />
          <div className={styles.lineShort} />
          <div className={styles.line} />
        </div>
        <div className={styles.col}>
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
    </div>
  );
}
