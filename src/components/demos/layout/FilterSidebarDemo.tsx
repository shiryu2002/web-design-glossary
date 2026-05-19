import type { DemoProps } from '../../../types';
import styles from './FilterSidebarDemo.module.css';

export function FilterSidebarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <aside className={styles.side}>
        <div className={styles.group}>Brand</div>
        <div className={styles.opt}>☑ Nike</div>
        <div className={styles.opt}>☐ Adidas</div>
        <div className={styles.opt}>☐ Puma</div>
        <div className={styles.group}>Price</div>
        <div className={styles.slider}>
          <div className={styles.fill} />
        </div>
      </aside>
      <main className={styles.results}>
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
      </main>
    </div>
  );
}
