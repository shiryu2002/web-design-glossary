import type { DemoProps } from '../../../types';
import styles from './DrawerDemo.module.css';

export function DrawerDemo({ mode = 'after' }: DemoProps) {
  const open = mode === 'after';
  return (
    <div className={styles.stage}>
      <div className={`${styles.scrim} ${open ? styles.scrimOpen : ''}`} />
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <div className={styles.title}>Menu</div>
        <div className={styles.item}>◆ Profile</div>
        <div className={styles.item}>◇ Settings</div>
        <div className={styles.item}>◇ Logout</div>
      </div>
    </div>
  );
}
