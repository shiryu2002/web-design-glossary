import type { DemoProps } from '../../../types';
import styles from './HandwrittenDemo.module.css';

export function HandwrittenDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>Hello</div>
      <div className={styles.note}>Handwritten / script</div>
    </div>
  );
}
