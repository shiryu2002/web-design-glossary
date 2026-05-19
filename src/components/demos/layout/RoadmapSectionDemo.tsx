import type { DemoProps } from '../../../types';
import styles from './RoadmapSectionDemo.module.css';

const phases = [
  { q: 'Q1', t: 'Beta', done: true },
  { q: 'Q2', t: 'Launch', done: true },
  { q: 'Q3', t: 'Mobile', done: false },
  { q: 'Q4', t: 'API v2', done: false },
];

export function RoadmapSectionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.track}>
        <div className={styles.line} />
        {phases.map((p) => (
          <div key={p.q} className={styles.node}>
            <div className={`${styles.dot} ${p.done ? styles.done : ''}`} />
            <div className={styles.q}>{p.q}</div>
            <div className={styles.t}>{p.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
