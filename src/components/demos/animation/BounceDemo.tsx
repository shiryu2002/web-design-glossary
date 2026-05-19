import type { DemoProps } from '../../../types';
import styles from './BounceDemo.module.css';

export function BounceDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.ball} />
      <div className={styles.shadow} />
    </div>
  );
}
