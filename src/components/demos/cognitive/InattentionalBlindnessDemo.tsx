import type { DemoProps } from '../../../types';
import styles from './InattentionalBlindnessDemo.module.css';

export function InattentionalBlindnessDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.flashTL} />
      <div className={styles.flashBR} />
      <div className={styles.center}>
        <div className={styles.task}>赤い○を数えて</div>
        <div className={styles.dots}>
          <span className={styles.red} />
          <span className={styles.red} />
          <span className={styles.red} />
        </div>
      </div>
    </div>
  );
}
