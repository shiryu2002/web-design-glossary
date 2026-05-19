import type { DemoProps } from '../../../types';
import styles from './HeartbeatDemo.module.css';

export function HeartbeatDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.heart}>♥</div>
    </div>
  );
}
