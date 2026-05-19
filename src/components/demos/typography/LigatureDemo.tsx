import type { DemoProps } from '../../../types';
import styles from './LigatureDemo.module.css';

export function LigatureDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.lig : styles.noLig}>
        fi fl ffi
      </div>
    </div>
  );
}
