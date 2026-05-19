import type { DemoProps } from '../../../types';
import styles from './GradientFlowDemo.module.css';

export function GradientFlowDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.flow} />
    </div>
  );
}
