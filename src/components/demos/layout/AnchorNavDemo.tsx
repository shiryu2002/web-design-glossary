import type { DemoProps } from '../../../types';
import styles from './AnchorNavDemo.module.css';

const sections = ['Intro', 'Concept', 'Steps', 'Result', 'FAQ'];

export function AnchorNavDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.toc}>
        <div className={styles.tocTitle}>Contents</div>
        {sections.map((s, i) => (
          <div key={s} className={`${styles.tocItem} ${i === 1 ? styles.active : ''}`}>
            <span className={styles.dot} />
            {s}
          </div>
        ))}
      </div>
      <div className={styles.doc}>
        {sections.map((s) => (
          <div key={s} className={styles.section}>
            <div className={styles.hdg}>{s}</div>
            <div className={styles.line} />
            <div className={styles.line} style={{ width: '70%' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
