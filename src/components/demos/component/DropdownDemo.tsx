import type { DemoProps } from '../../../types';
import styles from './DropdownDemo.module.css';

export function DropdownDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.trigger}>
        並び順: 新着順 <span className={styles.arrow}>▾</span>
      </div>
      <div className={styles.menu}>
        <div className={`${styles.opt} ${styles.optActive}`}>新着順</div>
        <div className={styles.opt}>人気順</div>
        <div className={styles.opt}>価格が安い順</div>
        <div className={styles.opt}>価格が高い順</div>
      </div>
    </div>
  );
}
