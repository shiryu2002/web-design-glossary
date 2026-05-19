import type { DemoProps } from '../../../types';
import styles from './TestimonialDemo.module.css';

export function TestimonialDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.quote}>“</div>
        <div className={styles.text}>
          このツールで作業時間が半分になりました。
        </div>
        <div className={styles.author}>
          <div className={styles.avatar}>A</div>
          <div className={styles.who}>
            <div className={styles.name}>Aさん</div>
            <div className={styles.title}>CEO, Sample Inc.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
