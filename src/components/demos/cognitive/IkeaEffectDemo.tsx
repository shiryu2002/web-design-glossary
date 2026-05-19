import type { DemoProps } from '../../../types';
import styles from './IkeaEffectDemo.module.css';

export function IkeaEffectDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.avatarWrap}>
        <div className={styles.avatar}>😊</div>
        <div className={styles.tools}>
          <div className={styles.tool}>🎨</div>
          <div className={styles.tool}>✂️</div>
          <div className={styles.tool}>👓</div>
        </div>
      </div>
      <div className={styles.label}>自作 = 愛着</div>
    </div>
  );
}
