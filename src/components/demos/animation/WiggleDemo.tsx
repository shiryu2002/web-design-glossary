import type { DemoProps } from '../../../types';
import styles from './WiggleDemo.module.css';

export function WiggleDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.wiggle : '';
  return (
    <div className={styles.stage}>
      <div className={`${styles.emoji} ${cls}`}>👋</div>
    </div>
  );
}
