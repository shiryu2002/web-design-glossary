import type { DemoProps } from '../../../types';
import styles from './InputGroupDemo.module.css';

export function InputGroupDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.group}>
        <span className={styles.prefix}>https://</span>
        <span className={styles.input}>example.com</span>
        <span className={styles.suffix}>.jp</span>
      </div>
      <div className={styles.group}>
        <span className={styles.iconPrefix}>$</span>
        <span className={styles.input}>1,200.00</span>
        <span className={styles.suffix}>USD</span>
      </div>
      <div className={styles.group}>
        <span className={styles.iconPrefix}>@</span>
        <span className={styles.input}>username</span>
      </div>
    </div>
  );
}
