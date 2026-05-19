import type { DemoProps } from '../../../types';
import styles from './HeroDemo.module.css';

export function HeroDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.hero}>
        <div className={styles.eyebrow}>Hero</div>
        <div className={styles.headline}>Big Headline</div>
        <div className={styles.cta}>Call to Action →</div>
      </div>
      <div className={styles.below}>
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
    </div>
  );
}
