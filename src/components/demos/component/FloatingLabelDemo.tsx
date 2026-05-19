import type { DemoProps } from '../../../types';
import styles from './FloatingLabelDemo.module.css';

export function FloatingLabelDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.field}>
        <div className={mode === 'after' ? styles.labelFloat : styles.labelPlain}>
          メールアドレス
        </div>
        <div className={styles.input}>
          name@example.com<span className={styles.cursor}>|</span>
        </div>
      </div>
    </div>
  );
}
