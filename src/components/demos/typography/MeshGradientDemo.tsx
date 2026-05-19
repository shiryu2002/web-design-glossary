import type { DemoProps } from '../../../types';
import styles from './MeshGradientDemo.module.css';

export function MeshGradientDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.mesh} />
    </div>
  );
}
