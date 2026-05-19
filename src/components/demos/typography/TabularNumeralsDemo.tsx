import type { DemoProps } from '../../../types';
import styles from './TabularNumeralsDemo.module.css';

export function TabularNumeralsDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.tab : styles.prop;
  return (
    <div className={styles.stage}>
      <div className={`${styles.row} ${cls}`}>1,234</div>
      <div className={`${styles.row} ${cls}`}>9,999</div>
      <div className={`${styles.row} ${cls}`}>1,111</div>
      <div className={`${styles.row} ${cls}`}>0,000</div>
    </div>
  );
}
