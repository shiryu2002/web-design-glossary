import type { DemoProps } from '../../../types';
import styles from './RichTextEditorDemo.module.css';

export function RichTextEditorDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.toolbar}>
        <button className={`${styles.btn} ${styles.bold}`}>B</button>
        <button className={`${styles.btn} ${styles.italic}`}>I</button>
        <button className={`${styles.btn} ${styles.underline}`}>U</button>
        <span className={styles.sep} />
        <button className={styles.btn}>≡</button>
        <button className={styles.btn}>•</button>
        <button className={styles.btn}>🔗</button>
      </div>
      <div className={styles.body}>
        <p>
          <b>太字</b>と<i>斜体</i>と<u>下線</u>を組み合わせて、文章を装飾できる。
        </p>
        <p className={styles.muted}>続きを入力…</p>
      </div>
    </div>
  );
}
