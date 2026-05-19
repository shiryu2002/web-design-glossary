import type { DemoProps } from '../../../types';
import styles from './KpiTileDemo.module.css';

const pts = [4, 6, 5, 7, 6, 9, 8, 11, 10, 13];
function toPath(arr: number[], w: number, h: number) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min || 1;
  return arr
    .map((p, i) => {
      const x = (i / (arr.length - 1)) * w;
      const y = h - ((p - min) / range) * h;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export function KpiTileDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.tile}>
        <div className={styles.label}>月間アクティブユーザー</div>
        <div className={styles.numRow}>
          <span className={styles.num}>12.4K</span>
          <span className={styles.trendUp}>▲ 18.2%</span>
        </div>
        <svg viewBox="0 0 100 24" className={styles.spark}>
          <path
            d={toPath(pts, 100, 24)}
            fill="none"
            stroke="#4eb87a"
            strokeWidth="1.5"
          />
          <path
            d={`${toPath(pts, 100, 24)} L 100,24 L 0,24 Z`}
            fill="rgba(78,184,122,0.15)"
          />
        </svg>
        <div className={styles.foot}>vs 先月 +1,890</div>
      </div>
    </div>
  );
}
