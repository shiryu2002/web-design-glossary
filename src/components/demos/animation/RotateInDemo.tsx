import type { DemoProps } from '../../../types';
import styles from './RotateInDemo.module.css';

export function RotateInDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.rotateIn : styles.fade;
  return (
    <div className={styles.stage}>
      <div className={`${styles.tile} ${cls}`}>RI</div>
    </div>
  );
}
