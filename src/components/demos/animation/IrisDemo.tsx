import type { DemoProps } from '../../../types';
import styles from './IrisDemo.module.css';

export function IrisDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bg}>SCENE</div>
      <div className={styles.iris} />
    </div>
  );
}
