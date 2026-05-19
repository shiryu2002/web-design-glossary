import type { DemoProps } from '../../../types';
import styles from './AboutSectionDemo.module.css';

export function AboutSectionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>
        <div className={styles.eyebrow}>About</div>
        <div className={styles.title}>We build calm software</div>
        <div className={styles.line} />
        <div className={styles.line} style={{ width: '70%' }} />
        <div className={styles.line} style={{ width: '85%' }} />
      </div>
      <div className={styles.image}>
        <div className={styles.imgInner}>◭</div>
      </div>
    </div>
  );
}
