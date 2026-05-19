import type { DemoProps } from '../../../types';
import styles from './PinStickyHoldDemo.module.css';

export function PinStickyHoldDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.viewport}>
        <div className={styles.pinned}>
          <div className={styles.label}>PIN</div>
          <div className={styles.bar}>
            <div className={styles.fill} />
          </div>
        </div>
        <div className={styles.scroll} />
      </div>
    </div>
  );
}
