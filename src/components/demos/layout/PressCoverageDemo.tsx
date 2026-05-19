import type { DemoProps } from '../../../types';
import styles from './PressCoverageDemo.module.css';

const press = [
  { media: 'TechCrunch', quote: '“Reinvents the workflow”' },
  { media: 'Wired', quote: '“A delight to use”' },
  { media: 'Forbes', quote: '“Best of 2026”' },
];

export function PressCoverageDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.title}>As featured in</div>
      <div className={styles.grid}>
        {press.map((p) => (
          <div key={p.media} className={styles.cell}>
            <div className={styles.logo}>{p.media}</div>
            <div className={styles.q}>{p.quote}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
