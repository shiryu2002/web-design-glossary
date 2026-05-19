import type { DemoProps } from '../../../types';
import styles from './FramedLayoutDemo.module.css';

export function FramedLayoutDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={styles.inner}>
          <div className={styles.title}>Framed</div>
          <div className={styles.sub}>contained content</div>
        </div>
      </div>
    </div>
  );
}
