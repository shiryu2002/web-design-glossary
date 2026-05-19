import type { DemoProps } from '../../../types';
import styles from './PhoneInputDemo.module.css';

export function PhoneInputDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.label}>電話番号</div>
      <div className={styles.group}>
        <div className={styles.country}>
          <span className={styles.flag}>
            <span className={styles.flagTop} />
            <span className={styles.flagBottom} />
          </span>
          <span className={styles.code}>+81</span>
          <span className={styles.caret}>▾</span>
        </div>
        <div className={styles.input}>90 1234 5678</div>
      </div>
      <div className={styles.hint}>SMS認証コードをお送りします</div>
    </div>
  );
}
