import type { DemoProps } from '../../../types';
import styles from './AsymmetricDemo.module.css';

export function AsymmetricDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.big}>
        <div className={styles.headline}>BIG</div>
        <div className={styles.headlineSub}>headline</div>
      </div>
      <div className={styles.small}>
        <div className={styles.dot} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  );
}
