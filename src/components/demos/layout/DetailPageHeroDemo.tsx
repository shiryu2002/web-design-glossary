import type { DemoProps } from '../../../types';
import styles from './DetailPageHeroDemo.module.css';

export function DetailPageHeroDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.image}>◧</div>
      <div className={styles.meta}>
        <div className={styles.cat}>SNEAKERS</div>
        <div className={styles.title}>Aero Runner X</div>
        <div className={styles.price}>¥18,900</div>
        <div className={styles.row}>
          <div className={styles.swatch} style={{ background: '#222' }} />
          <div className={`${styles.swatch} ${styles.active}`} style={{ background: '#5b4ee3' }} />
          <div className={styles.swatch} style={{ background: '#e74c3c' }} />
        </div>
        <div className={styles.cta}>Add to cart</div>
      </div>
    </div>
  );
}
