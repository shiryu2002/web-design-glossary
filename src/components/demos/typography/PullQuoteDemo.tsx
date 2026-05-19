import type { DemoProps } from '../../../types';
import styles from './PullQuoteDemo.module.css';

export function PullQuoteDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.line} />
      <blockquote className={styles.quote}>
        <span className={styles.mark}>“</span>
        デザインは見た目ではなく、機能のしかたである。
      </blockquote>
      <div className={styles.line} />
      <div className={styles.lineShort} />
    </div>
  );
}
