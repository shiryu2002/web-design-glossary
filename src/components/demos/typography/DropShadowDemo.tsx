import type { DemoProps } from '../../../types';
import styles from './DropShadowDemo.module.css';

export function DropShadowDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.shadow : styles.flat;
  return (
    <div className={styles.stage}>
      <div className={`${styles.card} ${cls}`}>
        <div className={styles.title}>Card</div>
        <div className={styles.sub}>with shadow</div>
      </div>
    </div>
  );
}
