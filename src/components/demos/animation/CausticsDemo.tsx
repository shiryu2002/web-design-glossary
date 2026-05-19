import type { DemoProps } from '../../../types';
import styles from './CausticsDemo.module.css';

export function CausticsDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.water}>
        <div className={styles.layerA} />
        <div className={styles.layerB} />
      </div>
    </div>
  );
}
