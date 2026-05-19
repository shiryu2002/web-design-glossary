import type { DemoProps } from '../../../types';
import styles from './ChatBubbleDemo.module.css';

export function ChatBubbleDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.bubble} ${styles.other}`}>こんにちは！</div>
      <div className={`${styles.bubble} ${styles.me}`}>調子どう？</div>
      <div className={`${styles.bubble} ${styles.other}`}>いいよ〜</div>
      <div className={`${styles.bubble} ${styles.me} ${styles.typing}`}>
        <span /><span /><span />
      </div>
    </div>
  );
}
