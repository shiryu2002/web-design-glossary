import type { DemoProps } from '../../../types';
import styles from './SliderDemo.module.css';

export function SliderDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <input
        className={styles.slider}
        type="range"
        min={0}
        max={100}
        defaultValue={62}
      />
    </div>
  );
}
