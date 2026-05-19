import type { DemoProps } from '../../../types';
import styles from './SplitHeroDemo.module.css';

export function SplitHeroDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>
        <div className={styles.eyebrow}>NEW</div>
        <div className={styles.title}>Build better.</div>
        <div className={styles.sub}>Tools for modern teams.</div>
        <div className={styles.cta}>Start</div>
      </div>
      <div className={styles.visual}>
        <div className={styles.shape} />
      </div>
    </div>
  );
}
