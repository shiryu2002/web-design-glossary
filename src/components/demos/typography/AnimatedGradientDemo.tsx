import type { DemoProps } from '../../../types';
import styles from './AnimatedGradientDemo.module.css';

export function AnimatedGradientDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bg} />
    </div>
  );
}
