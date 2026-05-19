import type { DemoProps } from '../../../types';
import styles from './NewsletterSignupDemo.module.css';

export function NewsletterSignupDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.band}>
        <div className={styles.copy}>
          <div className={styles.title}>Get weekly digest</div>
          <div className={styles.sub}>Tips, news, no spam.</div>
        </div>
        <div className={styles.form}>
          <div className={styles.input}>you@example.com</div>
          <div className={styles.btn}>Subscribe</div>
        </div>
      </div>
    </div>
  );
}
