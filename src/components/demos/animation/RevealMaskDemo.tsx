import type { DemoProps } from '../../../types';
import styles from './RevealMaskDemo.module.css';

export function RevealMaskDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.mask : styles.plain;
  return (
    <div className={styles.stage}>
      <h2 className={cls}>HEADLINE</h2>
    </div>
  );
}
