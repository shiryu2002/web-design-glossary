import type { DemoProps } from '../../../types';
import styles from './DiffViewDemo.module.css';

const before = [
  { n: 12, t: "const name = 'Alice';" },
  { n: 13, t: 'function greet() {' },
  { n: 14, t: "  return 'Hi';" },
  { n: 15, t: '}' },
];

export function DiffViewDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.panel}>
          {before.map((l) => (
            <div key={l.n} className={styles.line}>
              <span className={styles.num}>{l.n}</span>
              <span className={styles.code}>{l.t}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.panel}>
        <div className={`${styles.line} ${styles.add}`}>
          <span className={styles.numAdd}>12</span>
          <span className={styles.mark}>+</span>
          <span className={styles.code}>const name = 'Alice';</span>
        </div>
        <div className={`${styles.line} ${styles.del}`}>
          <span className={styles.numDel}>13</span>
          <span className={styles.mark}>-</span>
          <span className={styles.code}>function greet() {'{'}</span>
        </div>
        <div className={`${styles.line} ${styles.add}`}>
          <span className={styles.numAdd}>13</span>
          <span className={styles.mark}>+</span>
          <span className={styles.code}>function greet(user) {'{'}</span>
        </div>
        <div className={`${styles.line} ${styles.del}`}>
          <span className={styles.numDel}>14</span>
          <span className={styles.mark}>-</span>
          <span className={styles.code}>  return 'Hi';</span>
        </div>
        <div className={`${styles.line} ${styles.add}`}>
          <span className={styles.numAdd}>14</span>
          <span className={styles.mark}>+</span>
          <span className={styles.code}>  return `Hi, $&#123;user&#125;`;</span>
        </div>
      </div>
    </div>
  );
}
