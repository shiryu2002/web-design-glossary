import type { DemoProps } from '../../../types';
import styles from './UnderlineSweepDemo.module.css';

export function UnderlineSweepDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.sweep : styles.plain;
  return (
    <div className={styles.stage}>
      <a className={`${styles.link} ${cls}`}>Read more</a>
    </div>
  );
}
