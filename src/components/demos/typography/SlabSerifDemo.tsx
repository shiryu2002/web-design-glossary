import type { DemoProps } from '../../../types';
import styles from './SlabSerifDemo.module.css';

export function SlabSerifDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>Aa</div>
      <div className={styles.note}>Slab serif / 角張った太いセリフ</div>
    </div>
  );
}
