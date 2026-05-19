import type { DemoProps } from '../../../types';
import styles from './CaretBlinkDemo.module.css';

export function CaretBlinkDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.input}>
        <span className={styles.text}>Hello</span>
        <span className={styles.caret} />
      </div>
    </div>
  );
}
