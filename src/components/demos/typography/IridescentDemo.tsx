import type { DemoProps } from '../../../types';
import styles from './IridescentDemo.module.css';

export function IridescentDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.disc} />
    </div>
  );
}
