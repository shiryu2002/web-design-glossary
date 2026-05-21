import type { DemoProps } from '../../../types';
import styles from './ChangeBlindnessDemo.module.css';

export function ChangeBlindnessDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.scene}>
        <div className={styles.tileA} />
        <div className={styles.tileB} />
        <div className={`${styles.tileC} ${styles.morph}`} />
        <div className={styles.tileD} />
      </div>
      <div className={styles.hint}>1つ色がじわり変わってる</div>
    </div>
  );
}
