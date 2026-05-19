import type { DemoProps } from '../../../types';
import styles from './FadeInDemo.module.css';

export function FadeInDemo({ mode = 'after' }: DemoProps) {
  const animClass = mode === 'after' ? styles.fade : styles.instant;
  return (
    <div className={styles.stage}>
      <div className={`${styles.block} ${animClass}`}>Hello</div>
      <div className={`${styles.block} ${animClass}`} style={{ animationDelay: '0.4s' }}>
        World
      </div>
      <div className={`${styles.block} ${animClass}`} style={{ animationDelay: '0.8s' }}>
        ✦
      </div>
    </div>
  );
}
