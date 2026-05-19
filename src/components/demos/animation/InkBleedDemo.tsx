import type { DemoProps } from '../../../types';
import styles from './InkBleedDemo.module.css';

export function InkBleedDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.ink} />
    </div>
  );
}
