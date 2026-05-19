import type { DemoProps } from '../../../types';
import styles from './Rule603010Demo.module.css';

export function Rule603010Demo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={styles.sixty}>
          <span>60</span>
        </div>
        <div className={styles.thirty}>
          <span>30</span>
        </div>
        <div className={styles.ten}>
          <span>10</span>
        </div>
      </div>
      <div className={styles.label}>主役60 / 補助30 / 強調10</div>
    </div>
  );
}
