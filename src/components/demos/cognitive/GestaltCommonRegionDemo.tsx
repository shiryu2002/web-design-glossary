import type { DemoProps } from '../../../types';
import styles from './GestaltCommonRegionDemo.module.css';

export function GestaltCommonRegionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.region}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <div className={styles.region}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
}
