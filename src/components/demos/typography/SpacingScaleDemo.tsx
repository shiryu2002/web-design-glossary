import type { DemoProps } from '../../../types';
import styles from './SpacingScaleDemo.module.css';

const sizes = [4, 8, 16, 24, 32, 48];

export function SpacingScaleDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {sizes.map((s) => (
        <div className={styles.row} key={s}>
          <div className={styles.box} style={{ width: `${s}px` }} />
          <span className={styles.num}>{s}</span>
        </div>
      ))}
    </div>
  );
}
