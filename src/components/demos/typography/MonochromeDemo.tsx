import type { DemoProps } from '../../../types';
import styles from './MonochromeDemo.module.css';

export function MonochromeDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.mono : '';
  return (
    <div className={`${styles.stage} ${cls}`}>
      <div className={styles.swatch} style={{ background: '#ff5d8f' }} />
      <div className={styles.swatch} style={{ background: '#ffcf6f' }} />
      <div className={styles.swatch} style={{ background: '#6cd49c' }} />
      <div className={styles.swatch} style={{ background: '#5b4ee3' }} />
    </div>
  );
}
