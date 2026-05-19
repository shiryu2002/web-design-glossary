import type { DemoProps } from '../../../types';
import styles from './AppShellDemo.module.css';

export function AppShellDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.header}>Header</div>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <div className={styles.navItem} />
          <div className={styles.navItem} />
          <div className={styles.navItem} />
        </div>
        <div className={styles.main}>
          <div className={styles.row} />
          <div className={styles.row} />
          <div className={styles.row} />
        </div>
      </div>
      <div className={styles.tabbar}>
        <span>●</span><span>○</span><span>○</span>
      </div>
    </div>
  );
}
