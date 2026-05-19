import type { DemoProps } from '../../../types';
import styles from './ZeigarnikDemo.module.css';

export function ZeigarnikDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.title}>プロフィール 80%</div>
      <div className={styles.bar}><div className={styles.fill} /></div>
      <div className={styles.list}>
        <div className={styles.done}>✓ 名前</div>
        <div className={styles.done}>✓ メール</div>
        <div className={styles.done}>✓ 写真</div>
        <div className={styles.todo}>○ 自己紹介</div>
      </div>
    </div>
  );
}
