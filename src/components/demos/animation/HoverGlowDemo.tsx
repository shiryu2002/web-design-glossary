import type { DemoProps } from '../../../types';
import styles from './HoverGlowDemo.module.css';

export function HoverGlowDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.btn}>HOVER GLOW</div>
    </div>
  );
}
