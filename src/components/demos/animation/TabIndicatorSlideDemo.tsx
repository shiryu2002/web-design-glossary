import type { DemoProps } from '../../../types';
import styles from './TabIndicatorSlideDemo.module.css';

export function TabIndicatorSlideDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.tabs}>
        <span className={styles.tab}>Home</span>
        <span className={styles.tab}>Feed</span>
        <span className={styles.tab}>Inbox</span>
        <span className={styles.indicator} />
      </div>
    </div>
  );
}
