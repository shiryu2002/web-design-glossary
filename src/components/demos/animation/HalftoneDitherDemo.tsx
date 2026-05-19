import type { DemoProps } from '../../../types';
import styles from './HalftoneDitherDemo.module.css';

export function HalftoneDitherDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.reveal : styles.plain;
  return (
    <div className={styles.stage}>
      <div className={`${styles.image} ${cls}`} />
    </div>
  );
}
