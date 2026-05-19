import type { DemoProps } from '../../../types';
import styles from './AspectRatioBoxDemo.module.css';

export function AspectRatioBoxDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.box} ${styles.r16}`}>
        <span>16:9</span>
      </div>
      <div className={`${styles.box} ${styles.r43}`}>
        <span>4:3</span>
      </div>
      <div className={`${styles.box} ${styles.r11}`}>
        <span>1:1</span>
      </div>
    </div>
  );
}
