import type { DemoProps } from '../../../types';
import styles from './ShakeDemo.module.css';

export function ShakeDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.shake : '';
  return (
    <div className={styles.stage}>
      <div className={`${styles.input} ${cls}`}>
        <span className={styles.icon}>!</span>
        <span className={styles.text}>パスワードが違います</span>
      </div>
    </div>
  );
}
