import type { DemoProps } from '../../../types';
import styles from './RecognitionRecallDemo.module.css';

export function RecognitionRecallDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.input}>都市名を入力...</div>
        <div className={styles.note}>覚えていないと書けない</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.input}>東京</div>
      <div className={styles.menu}>
        <div className={styles.opt}>東京駅</div>
        <div className={styles.opt}>東京タワー</div>
      </div>
      <div className={styles.note}>候補から選ぶだけ</div>
    </div>
  );
}
