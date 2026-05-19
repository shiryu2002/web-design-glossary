import type { DemoProps } from '../../../types';
import styles from './MultiSelectDemo.module.css';

export function MultiSelectDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.field}>
        <span className={styles.chip}>React <span className={styles.x}>✕</span></span>
        <span className={styles.chip}>Vue <span className={styles.x}>✕</span></span>
        <span className={styles.chip}>Svelte <span className={styles.x}>✕</span></span>
        <span className={styles.placeholder}>選択…</span>
      </div>
      <div className={styles.menu}>
        <div className={styles.opt}>✓ React</div>
        <div className={styles.opt}>✓ Vue</div>
        <div className={styles.opt}>✓ Svelte</div>
        <div className={`${styles.opt} ${styles.dim}`}>Angular</div>
        <div className={`${styles.opt} ${styles.dim}`}>Solid</div>
      </div>
    </div>
  );
}
