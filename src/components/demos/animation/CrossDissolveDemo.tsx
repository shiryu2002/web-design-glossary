import type { DemoProps } from '../../../types';
import styles from './CrossDissolveDemo.module.css';

export function CrossDissolveDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={`${styles.scene} ${styles.cut}`}>
          <div className={`${styles.layer} ${styles.layerA}`}>A</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.scene}>
        <div className={`${styles.layer} ${styles.layerA} ${styles.dissolveA}`}>A</div>
        <div className={`${styles.layer} ${styles.layerB} ${styles.dissolveB}`}>B</div>
      </div>
    </div>
  );
}
