import type { DemoProps } from '../../../types';
import styles from './SnapDemo.module.css';

export function SnapDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.track}>
        <span className={styles.mark} style={{ left: '20%' }} />
        <span className={styles.mark} style={{ left: '50%' }} />
        <span className={styles.mark} style={{ left: '80%' }} />
        <div className={styles.dot} />
      </div>
    </div>
  );
}
