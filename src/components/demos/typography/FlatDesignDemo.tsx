import type { DemoProps } from '../../../types';
import styles from './FlatDesignDemo.module.css';

export function FlatDesignDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <button type="button" className={styles.button}>Action</button>
      <div className={styles.note}>Flat / 影や立体なし</div>
    </div>
  );
}
