import type { DemoProps } from '../../../types';
import styles from './ComplementaryDemo.module.css';

export function ComplementaryDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bg}>
        <div className={styles.btn}>Buy Now</div>
      </div>
      <div className={styles.legend}>
        <div className={styles.swatch} style={{ background: '#5b4ee3' }}>
          紫
        </div>
        <div className={styles.swatch} style={{ background: '#e3d44e', color: '#3a2f00' }}>
          黄
        </div>
      </div>
    </div>
  );
}
