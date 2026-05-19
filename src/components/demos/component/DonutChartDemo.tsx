import type { DemoProps } from '../../../types';
import styles from './DonutChartDemo.module.css';

const data = [
  { label: 'Direct', val: 45, c: '#5b4ee3' },
  { label: 'Search', val: 28, c: '#4eb87a' },
  { label: 'Social', val: 18, c: '#e39b5b' },
  { label: 'Other', val: 9, c: '#d34c4c' },
];

export function DonutChartDemo(_: DemoProps) {
  const total = data.reduce((s, d) => s + d.val, 0);
  const r = 32;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className={styles.stage}>
      <div className={styles.chart}>
        <svg viewBox="0 0 80 80" className={styles.svg}>
          <circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="var(--border)"
            strokeWidth="12"
          />
          {data.map((d, i) => {
            const len = (d.val / total) * c;
            const dash = `${len} ${c - len}`;
            const dashOffset = -offset;
            offset += len;
            return (
              <circle
                key={i}
                cx="40"
                cy="40"
                r={r}
                fill="none"
                stroke={d.c}
                strokeWidth="12"
                strokeDasharray={dash}
                strokeDashoffset={dashOffset}
                transform="rotate(-90 40 40)"
              />
            );
          })}
        </svg>
        <div className={styles.center}>
          <div className={styles.num}>{total}%</div>
          <div className={styles.cap}>合計</div>
        </div>
      </div>
      <div className={styles.legend}>
        {data.map((d) => (
          <div key={d.label} className={styles.li}>
            <span className={styles.dot} style={{ background: d.c }} />
            <span className={styles.l}>{d.label}</span>
            <span className={styles.v}>{d.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
