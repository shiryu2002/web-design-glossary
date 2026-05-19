import type { DemoProps } from '../../../types';
import styles from './FullBleedDemo.module.css';

export function FullBleedDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.col}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={mode === 'after' ? styles.bleed : styles.contained}>
          <div className={styles.image}>IMAGE</div>
        </div>
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  );
}
