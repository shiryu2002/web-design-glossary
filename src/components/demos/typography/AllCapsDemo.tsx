import type { DemoProps } from '../../../types';
import styles from './AllCapsDemo.module.css';

export function AllCapsDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.caps : styles.normal}>
        section title
      </div>
    </div>
  );
}
