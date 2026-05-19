import type { DemoProps } from '../../../types';
import styles from './TreeViewDemo.module.css';

export function TreeViewDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.node}>
        <span className={styles.icon}>▾</span> 📁 src
      </div>
      <div className={styles.child}>
        <div className={styles.node}>
          <span className={styles.icon}>▾</span> 📁 components
        </div>
        <div className={styles.child}>
          <div className={styles.leaf}>📄 Button.tsx</div>
          <div className={styles.leaf}>📄 Card.tsx</div>
        </div>
        <div className={styles.leaf}>📄 App.tsx</div>
        <div className={styles.leaf}>📄 main.tsx</div>
      </div>
    </div>
  );
}
