import type { DemoProps } from '../../../types';
import styles from './SansSerifDemo.module.css';

export function SansSerifDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>Aa</div>
      <div className={styles.note}>Sans-serif / 飾りなし</div>
    </div>
  );
}
