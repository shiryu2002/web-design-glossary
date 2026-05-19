import type { DemoProps } from '../../../types';
import styles from './SpinnerDemo.module.css';

export function SpinnerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.dots}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
