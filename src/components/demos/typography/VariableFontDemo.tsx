import type { DemoProps } from '../../../types';
import styles from './VariableFontDemo.module.css';

export function VariableFontDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <span className={styles.text}>Weight</span>
    </div>
  );
}
