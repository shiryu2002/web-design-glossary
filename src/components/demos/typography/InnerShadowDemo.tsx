import type { DemoProps } from '../../../types';
import styles from './InnerShadowDemo.module.css';

export function InnerShadowDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.inner : styles.flat} />
      <div className={styles.note}>
        {mode === 'after' ? 'inner shadow（凹）' : 'flat'}
      </div>
    </div>
  );
}
