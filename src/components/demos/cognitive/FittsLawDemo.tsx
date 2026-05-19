import type { DemoProps } from '../../../types';
import styles from './FittsLawDemo.module.css';

export function FittsLawDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.start}>👆</div>
      <div className={styles.small}>小</div>
      <div className={styles.large}>大</div>
    </div>
  );
}
