import type { DemoProps } from '../../../types';
import styles from './DiagonalSectionDemo.module.css';

export function DiagonalSectionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.top}>TOP</div>
      <div className={styles.middle}>MIDDLE</div>
      <div className={styles.bottom}>BOTTOM</div>
    </div>
  );
}
