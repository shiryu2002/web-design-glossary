import type { DemoProps } from '../../../types';
import styles from './FAQSectionDemo.module.css';

export function FAQSectionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.head}>よくある質問</div>
      <div className={styles.item}>Q. 料金は？<span className={styles.toggle}>+</span></div>
      <div className={styles.item}>Q. 返金は可能？<span className={styles.toggle}>+</span></div>
      <div className={styles.item}>Q. プランは変更できる？<span className={styles.toggle}>+</span></div>
    </div>
  );
}
