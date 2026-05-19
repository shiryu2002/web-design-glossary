import type { DemoProps } from '../../../types';
import styles from './BackToTopDemo.module.css';

export function BackToTopDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.content}>
        <div className={styles.line} />
        <div className={styles.line} style={{ width: '80%' }} />
        <div className={styles.line} style={{ width: '90%' }} />
        <div className={styles.line} style={{ width: '70%' }} />
        <div className={styles.line} />
        <div className={styles.line} style={{ width: '85%' }} />
      </div>
      <button className={styles.btn} aria-label="ページ先頭へ">
        <span className={styles.arrow}>↑</span>
      </button>
    </div>
  );
}
