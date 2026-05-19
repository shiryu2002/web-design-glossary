import type { DemoProps } from '../../../types';
import styles from './MarchingAntsDemo.module.css';

export function MarchingAntsDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.selection}>
        <span className={styles.label}>Selection</span>
      </div>
    </div>
  );
}
