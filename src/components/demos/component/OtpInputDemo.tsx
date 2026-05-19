import type { DemoProps } from '../../../types';
import styles from './OtpInputDemo.module.css';

const digits = ['4', '8', '2', '', '', ''];

export function OtpInputDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.label}>認証コードを入力</div>
      <div className={styles.row}>
        {digits.map((d, i) => (
          <div
            key={i}
            className={`${styles.box} ${i === 3 ? styles.active : ''}`}
          >
            {d}
            {i === 3 && <span className={styles.caret} />}
          </div>
        ))}
      </div>
      <div className={styles.hint}>SMSで届いた6桁のコード</div>
    </div>
  );
}
