import type { DemoProps } from '../../../types';
import styles from './ColorPickerDemo.module.css';

export function ColorPickerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.field}>
        <div className={styles.thumb} />
        <div className={styles.cursor} />
      </div>
      <div className={styles.hue} />
      <div className={styles.input}>#5B4EE3</div>
    </div>
  );
}
