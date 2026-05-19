import type { DemoProps } from '../../../types';
import styles from './JpGothicDemo.module.css';

export function JpGothicDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>ゴシック</div>
      <div className={styles.note}>Gothic / 和文サンセリフ</div>
    </div>
  );
}
