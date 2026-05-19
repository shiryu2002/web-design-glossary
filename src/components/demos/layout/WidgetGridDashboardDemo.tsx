import type { DemoProps } from '../../../types';
import styles from './WidgetGridDashboardDemo.module.css';

export function WidgetGridDashboardDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        <div className={`${styles.widget} ${styles.kpi}`}>
          <div className={styles.label}>Revenue</div>
          <div className={styles.value}>¥1.2M</div>
        </div>
        <div className={`${styles.widget} ${styles.chart}`}>
          <div className={styles.label}>Trend</div>
          <div className={styles.bars}>
            <div style={{ height: '40%' }} />
            <div style={{ height: '70%' }} />
            <div style={{ height: '55%' }} />
            <div style={{ height: '90%' }} />
            <div style={{ height: '60%' }} />
          </div>
        </div>
        <div className={`${styles.widget} ${styles.donut}`}>
          <div className={styles.ring} />
        </div>
        <div className={`${styles.widget} ${styles.list}`}>
          <div className={styles.label}>Tasks</div>
          <div className={styles.row} />
          <div className={styles.row} style={{ width: '70%' }} />
          <div className={styles.row} style={{ width: '85%' }} />
        </div>
      </div>
    </div>
  );
}
