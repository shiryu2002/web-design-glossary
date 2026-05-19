import type { DemoProps } from '../../../types';
import styles from './ProcessStepsDemo.module.css';

const steps = [
  { n: '01', t: 'Discover' },
  { n: '02', t: 'Design' },
  { n: '03', t: 'Build' },
  { n: '04', t: 'Ship' },
];

export function ProcessStepsDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {steps.map((s, i) => (
        <div key={s.n} className={styles.step}>
          <div className={styles.num}>{s.n}</div>
          <div className={styles.label}>{s.t}</div>
          {i < steps.length - 1 && <div className={styles.arrow}>→</div>}
        </div>
      ))}
    </div>
  );
}
