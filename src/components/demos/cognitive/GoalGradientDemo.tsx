import type { DemoProps } from '../../../types';
import styles from './GoalGradientDemo.module.css';

export function GoalGradientDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.label}>あと1つで完了！</div>
      <div className={styles.bar}>
        <div className={styles.fill} />
      </div>
      <div className={styles.steps}>4/5 完了</div>
    </div>
  );
}
