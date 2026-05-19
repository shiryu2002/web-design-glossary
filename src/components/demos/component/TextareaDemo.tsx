import type { DemoProps } from '../../../types';
import styles from './TextareaDemo.module.css';

export function TextareaDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.label}>メッセージ</div>
      <div className={styles.box}>
        <div className={styles.text}>
          こんにちは。
          <br />
          ご連絡ありがとうございます。
          <br />
          詳細を確認します。
        </div>
        <div className={styles.handle} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
