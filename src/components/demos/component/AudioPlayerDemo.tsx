import type { DemoProps } from '../../../types';
import styles from './AudioPlayerDemo.module.css';

export function AudioPlayerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.player}>
        <button className={styles.play}>
          <span className={styles.tri} />
        </button>
        <div className={styles.body}>
          <div className={styles.title}>Lo-Fi Beats</div>
          <div className={styles.bar}>
            <div className={styles.fill} />
            <div className={styles.thumb} />
          </div>
          <div className={styles.times}>
            <span>1:24</span>
            <span>3:42</span>
          </div>
        </div>
      </div>
    </div>
  );
}
