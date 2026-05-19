import type { DemoProps } from '../../../types';
import styles from './CenteredColumnDemo.module.css';

export function CenteredColumnDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.col}>
        <div className={styles.title}>Article</div>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.lineShort} />
        <div className={styles.line} />
      </div>
    </div>
  );
}
