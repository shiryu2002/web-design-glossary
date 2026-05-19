import type { DemoProps } from '../../../types';
import styles from './SlideInDemo.module.css';

export function SlideInDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.slide : '';
  return (
    <div className={styles.stage}>
      <div className={`${styles.card} ${cls}`}>→ Slide In</div>
    </div>
  );
}
