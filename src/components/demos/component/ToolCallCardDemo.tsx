import type { DemoProps } from '../../../types';
import styles from './ToolCallCardDemo.module.css';

export function ToolCallCardDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.head}>
          <span className={styles.icon}>⚙</span>
          <span className={styles.name}>
            <code>search_codebase</code>
          </span>
          <span className={styles.status}>
            <span className={styles.spinner} />
            実行中
          </span>
        </div>
        <div className={styles.args}>
          <div className={styles.row}>
            <span className={styles.key}>query</span>
            <span className={styles.val}>"useState"</span>
          </div>
          <div className={styles.row}>
            <span className={styles.key}>path</span>
            <span className={styles.val}>"src/"</span>
          </div>
        </div>
      </div>
    </div>
  );
}
