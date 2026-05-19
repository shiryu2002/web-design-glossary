import type { DemoProps } from '../../../types';
import styles from './ToolbarLayoutDemo.module.css';

export function ToolbarLayoutDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.toolbar}>
        <div className={styles.group}>
          <div className={styles.btn}>B</div>
          <div className={styles.btn}>I</div>
          <div className={styles.btn}>U</div>
        </div>
        <div className={styles.sep} />
        <div className={styles.group}>
          <div className={styles.btn}>≡</div>
          <div className={styles.btn}>≣</div>
        </div>
        <div className={styles.sep} />
        <div className={styles.group}>
          <div className={styles.btn}>⌘</div>
          <div className={styles.btn}>⚙</div>
        </div>
      </div>
      <div className={styles.canvas}>Canvas</div>
    </div>
  );
}
