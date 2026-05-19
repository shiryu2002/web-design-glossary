import type { DemoProps } from '../../../types';
import styles from './MinchoDemo.module.css';

export function MinchoDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>明朝</div>
      <div className={styles.note}>Mincho / 和文セリフ</div>
    </div>
  );
}
