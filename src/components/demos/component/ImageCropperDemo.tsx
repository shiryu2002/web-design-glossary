import type { DemoProps } from '../../../types';
import styles from './ImageCropperDemo.module.css';

export function ImageCropperDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.crop}>
            <div className={`${styles.handle} ${styles.tl}`} />
            <div className={`${styles.handle} ${styles.tr}`} />
            <div className={`${styles.handle} ${styles.bl}`} />
            <div className={`${styles.handle} ${styles.br}`} />
            <div className={styles.gridV} />
            <div className={styles.gridH} />
          </div>
        </div>
      </div>
    </div>
  );
}
