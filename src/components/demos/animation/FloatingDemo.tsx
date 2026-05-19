import type { DemoProps } from '../../../types';
import styles from './FloatingDemo.module.css';

export function FloatingDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bubble} style={{ animationDelay: '0s' }}>★</div>
      <div className={styles.bubble} style={{ animationDelay: '0.6s' }}>♥</div>
      <div className={styles.bubble} style={{ animationDelay: '1.2s' }}>◆</div>
    </div>
  );
}
