import type { DemoProps } from '../../../types';
import styles from './HorizontalScrollHijackDemo.module.css';

export function HorizontalScrollHijackDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={styles.row}>
          <div className={styles.card} style={{ background: 'var(--accent)' }}>1</div>
          <div className={styles.card} style={{ background: '#7a70ea' }}>2</div>
          <div className={styles.card} style={{ background: '#a9a2f3' }}>3</div>
          <div className={styles.card} style={{ background: '#c8c2f9' }}>4</div>
        </div>
      </div>
      <div className={styles.arrow}>↓ → →</div>
    </div>
  );
}
