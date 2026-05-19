import type { DemoProps } from '../../../types';
import styles from './SkeletonDemo.module.css';

export function SkeletonDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.avatar}>A</div>
        <div className={styles.lines}>
          <div className={styles.title}>記事タイトル</div>
          <div className={styles.text}>本文のサンプルテキストです。</div>
          <div className={styles.text}>２行目のテキスト。</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={`${styles.avatar} ${styles.skel}`} />
      <div className={styles.lines}>
        <div className={`${styles.title} ${styles.skel}`} />
        <div className={`${styles.text} ${styles.skel}`} />
        <div className={`${styles.text} ${styles.skelShort}`} />
      </div>
    </div>
  );
}
