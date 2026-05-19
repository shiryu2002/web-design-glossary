import type { DemoProps } from '../../../types';
import styles from './SignifierDemo.module.css';

export function SignifierDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>← スワイプ →</div>
      <div className={styles.card}>カード</div>
      <div className={styles.dots}>● ○ ○ ○</div>
    </div>
  );
}
