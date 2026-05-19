import type { DemoProps } from '../../../types';
import styles from './PictureSuperiorityDemo.module.css';

export function PictureSuperiorityDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.menu}>
        <div className={styles.item}>{mode === 'after' && <span className={styles.icon}>🏠</span>}Home</div>
        <div className={styles.item}>{mode === 'after' && <span className={styles.icon}>🔍</span>}Search</div>
        <div className={styles.item}>{mode === 'after' && <span className={styles.icon}>⚙️</span>}Settings</div>
      </div>
    </div>
  );
}
