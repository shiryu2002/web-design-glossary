import type { DemoProps } from '../../../types';
import styles from './LightboxDemo.module.css';

export function LightboxDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.thumbRow}>
        <div className={styles.thumb} style={{ background: '#ff7a59' }} />
        <div className={styles.thumb} style={{ background: '#5b4ee3' }} />
        <div className={styles.thumb} style={{ background: '#6cd49c' }} />
      </div>
      <div className={styles.scrim} />
      <div className={styles.lightbox}>
        <div className={styles.image} style={{ background: '#5b4ee3' }} />
        <div className={styles.controls}>
          <span>‹</span>
          <span>2 / 3</span>
          <span>›</span>
        </div>
      </div>
    </div>
  );
}
