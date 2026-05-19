import type { DemoProps } from '../../../types';
import styles from './VideoPlayerDemo.module.css';

export function VideoPlayerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={styles.scenery}>
          <div className={styles.sun} />
          <div className={styles.mountain1} />
          <div className={styles.mountain2} />
          <div className={styles.ground} />
        </div>
        <button className={styles.play}>
          <span className={styles.tri} />
        </button>
        <div className={styles.controls}>
          <div className={styles.bar}>
            <div className={styles.fill} />
          </div>
          <div className={styles.row}>
            <span className={styles.miniPlay}>▶</span>
            <span className={styles.time}>0:42 / 2:15</span>
            <span className={styles.right}>
              <span>HD</span>
              <span>⛶</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
