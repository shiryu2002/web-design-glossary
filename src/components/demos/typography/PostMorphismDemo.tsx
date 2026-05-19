import type { DemoProps } from '../../../types';
import styles from './PostMorphismDemo.module.css';

export function PostMorphismDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <div className={styles.iconInner} />
        </div>
        <div className={styles.text}>
          <div className={styles.title}>Post-Morphism</div>
          <div className={styles.sub}>quiet depth, no texture</div>
        </div>
        <div className={styles.toggle}>
          <div className={styles.toggleKnob} />
        </div>
      </div>
    </div>
  );
}
