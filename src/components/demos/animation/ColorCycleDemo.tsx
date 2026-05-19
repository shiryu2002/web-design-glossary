import type { DemoProps } from '../../../types';
import styles from './ColorCycleDemo.module.css';

export function ColorCycleDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.box}>COLOR</div>
    </div>
  );
}
