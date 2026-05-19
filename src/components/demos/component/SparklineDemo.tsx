import type { DemoProps } from '../../../types';
import styles from './SparklineDemo.module.css';

const rows = [
  { name: 'Tokyo', val: '¥1,240', pts: [5, 8, 6, 10, 12, 9, 14], up: true },
  { name: 'Osaka', val: '¥980', pts: [10, 8, 9, 6, 7, 5, 4], up: false },
  { name: 'Kyoto', val: '¥630', pts: [4, 6, 5, 8, 7, 9, 11], up: true },
];

function toPath(pts: number[]) {
  const w = 50;
  const h = 14;
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const range = max - min || 1;
  return pts
    .map((p, i) => {
      const x = (i / (pts.length - 1)) * w;
      const y = h - ((p - min) / range) * h;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export function SparklineDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <table className={styles.table}>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td className={styles.name}>{r.name}</td>
              <td className={styles.val}>{r.val}</td>
              <td className={styles.chart}>
                <svg width="50" height="14" viewBox="0 0 50 14">
                  <path
                    d={toPath(r.pts)}
                    fill="none"
                    stroke={r.up ? '#4eb87a' : '#d34c4c'}
                    strokeWidth="1.2"
                  />
                </svg>
              </td>
              <td className={`${styles.trend} ${r.up ? styles.up : styles.down}`}>
                {r.up ? '▲' : '▼'} {r.up ? '12%' : '5%'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
