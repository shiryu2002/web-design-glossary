import type { DemoProps } from '../../../types';
import styles from './LeadingDemo.module.css';

const TEXT = 'Leading は活版印刷の鉛（lead）に由来。行と行の間隔を整える組版用語。';

export function LeadingDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <p className={mode === 'after' ? styles.airy : styles.tight}>{TEXT}</p>
      <div className={styles.note}>
        {mode === 'after' ? 'leading 1.8（after）' : 'leading 1.1（before）'}
      </div>
    </div>
  );
}
