import type { DemoProps } from '../../../types';
import styles from './CitationPillDemo.module.css';

export function CitationPillDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <p className={styles.text}>
        富士山は日本で最も高い山で、標高は3,776mである
        <sup className={styles.pill}>1</sup>
        。世界遺産にも登録されている
        <sup className={styles.pill}>2</sup>
        <sup className={styles.pill}>3</sup>。
      </p>
      <div className={styles.refs}>
        <div className={styles.ref}>
          <span className={styles.num}>1</span>
          <span className={styles.refText}>国土地理院 山岳標高</span>
        </div>
        <div className={styles.ref}>
          <span className={styles.num}>2</span>
          <span className={styles.refText}>UNESCO World Heritage</span>
        </div>
      </div>
    </div>
  );
}
