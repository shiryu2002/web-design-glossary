import type { DemoProps } from '../../../types';
import styles from './Y2KDemo.module.css';

export function Y2KDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bubble} />
      <div className={styles.chrome}>Y2K</div>
      <div className={styles.star} />
    </div>
  );
}
