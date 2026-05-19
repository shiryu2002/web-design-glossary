import type { DemoProps } from '../../../types';
import styles from './ZoomDemo.module.css';

export function ZoomDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.zoom : '';
  return (
    <div className={styles.stage}>
      <div className={`${styles.box} ${cls}`}>ZOOM</div>
    </div>
  );
}
