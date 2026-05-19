import type { DemoProps } from '../../../types';
import styles from './AvatarDemo.module.css';

export function AvatarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.group}>
        <div className={styles.avatar} style={{ background: '#ff7a59', zIndex: 4 }}>
          A
        </div>
        <div className={styles.avatar} style={{ background: '#5b4ee3', zIndex: 3 }}>
          B
        </div>
        <div className={styles.avatar} style={{ background: '#6cd49c', zIndex: 2 }}>
          C
        </div>
        <div className={`${styles.avatar} ${styles.more}`} style={{ zIndex: 1 }}>
          +3
        </div>
      </div>
    </div>
  );
}
