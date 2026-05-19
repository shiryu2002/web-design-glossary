import type { DemoProps } from '../../../types';
import styles from './KerningDemo.module.css';

export function KerningDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.tight : styles.loose}>
        DESIGN
      </div>
      <div className={styles.note}>
        {mode === 'after' ? '詰めた状態（after）' : '間延びした状態（before）'}
      </div>
    </div>
  );
}
