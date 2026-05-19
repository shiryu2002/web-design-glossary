import type { DemoProps } from '../../../types';
import styles from './SerifDemo.module.css';

export function SerifDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>Aa</div>
      <div className={styles.note}>Serif / 飾りあり</div>
    </div>
  );
}
