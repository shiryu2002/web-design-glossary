import type { DemoProps } from '../../../types';
import styles from './QuoteSectionDemo.module.css';

export function QuoteSectionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.mark}>“</div>
      <div className={styles.text}>Design is the silent ambassador of your brand.</div>
      <div className={styles.attr}>— Paul Rand</div>
    </div>
  );
}
