import type { DemoProps } from '../../../types';
import styles from './SidebarDemo.module.css';

export function SidebarDemo({ mode = 'after' }: DemoProps) {
  const open = mode === 'after';
  return (
    <div className={styles.stage}>
      <div className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <div className={styles.item}>◆ Home</div>
        <div className={styles.item}>◇ Search</div>
        <div className={styles.item}>◇ Settings</div>
      </div>
      <div className={styles.content}>
        <div className={styles.menuBtn}>☰</div>
        <div className={styles.contentRow} />
        <div className={styles.contentRow} />
        <div className={styles.contentRow} />
      </div>
    </div>
  );
}
