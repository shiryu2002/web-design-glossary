import type { DemoProps } from '../../../types';
import styles from './MappingDemo.module.css';

export function MappingDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span>音量</span>
        <div className={styles.bar}><div className={styles.fill} style={{ width: '40%' }} /></div>
        <span className={styles.icon}>🔉</span>
      </div>
      <div className={styles.note}>左→右で大きく（実際の対応）</div>
    </div>
  );
}
