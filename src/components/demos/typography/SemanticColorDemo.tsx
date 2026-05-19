import type { DemoProps } from '../../../types';
import styles from './SemanticColorDemo.module.css';

export function SemanticColorDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        <div className={`${styles.chip} ${styles.success}`}>success</div>
        <div className={`${styles.chip} ${styles.warning}`}>warning</div>
        <div className={`${styles.chip} ${styles.error}`}>error</div>
        <div className={`${styles.chip} ${styles.info}`}>info</div>
      </div>
    </div>
  );
}
