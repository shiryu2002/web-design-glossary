import type { DemoProps } from '../../../types';
import styles from './OffCanvasDemo.module.css';

export function OffCanvasDemo({ mode = 'after' }: DemoProps) {
  const open = mode === 'after';
  return (
    <div className={styles.stage}>
      <div className={styles.content}>
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`} />
      <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
        <div className={styles.title}>Menu</div>
        <div className={styles.link}>Home</div>
        <div className={styles.link}>Profile</div>
        <div className={styles.link}>Logout</div>
      </div>
    </div>
  );
}
