import type { DemoProps } from '../../../types';
import styles from './ShimmerDemo.module.css';

export function ShimmerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.line} style={{ width: '80%' }} />
      <div className={styles.line} style={{ width: '60%' }} />
      <div className={styles.line} style={{ width: '70%' }} />
    </div>
  );
}
