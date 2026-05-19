import type { DemoProps } from '../../../types';
import styles from './HolyGrailDemo.module.css';

export function HolyGrailDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.header}>Header</div>
      <div className={styles.body}>
        <div className={styles.aside}>Nav</div>
        <div className={styles.main}>Main</div>
        <div className={styles.aside}>Ads</div>
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}
