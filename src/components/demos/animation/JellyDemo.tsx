import type { DemoProps } from '../../../types';
import styles from './JellyDemo.module.css';

export function JellyDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.blob}>Squish</div>
    </div>
  );
}
