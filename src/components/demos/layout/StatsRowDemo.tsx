import type { DemoProps } from '../../../types';
import styles from './StatsRowDemo.module.css';

const stats = [
  { n: '10k+', l: 'ユーザー' },
  { n: '98%', l: '満足度' },
  { n: '24h', l: 'サポート' },
  { n: '40+', l: '国' },
];

export function StatsRowDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {stats.map((s) => (
        <div className={styles.item} key={s.l}>
          <div className={styles.num}>{s.n}</div>
          <div className={styles.label}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}
