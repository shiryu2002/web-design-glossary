import type { DemoProps } from '../../../types';
import styles from './MorphDemo.module.css';

export function MorphDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.blob} />
    </div>
  );
}
