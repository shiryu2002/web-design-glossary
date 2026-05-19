import type { DemoProps } from '../../../types';
import styles from './RisographDemo.module.css';

export function RisographDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.layerA} />
      <div className={styles.layerB} />
      <div className={styles.grain} />
      <div className={styles.text}>RISO</div>
    </div>
  );
}
