import type { DemoProps } from '../../../types';
import styles from './StepperDemo.module.css';

const steps = ['カート', '配送', '支払い', '完了'];

export function StepperDemo(_: DemoProps) {
  const current = 1;
  return (
    <div className={styles.stage}>
      <ol className={styles.steps}>
        {steps.map((s, i) => {
          const state = i < current ? 'done' : i === current ? 'active' : 'pending';
          return (
            <li key={s} className={styles.step}>
              <span className={`${styles.circle} ${styles[state]}`}>
                {state === 'done' ? '✓' : i + 1}
              </span>
              <span className={styles.label}>{s}</span>
              {i < steps.length - 1 && (
                <span className={`${styles.bar} ${i < current ? styles.barDone : ''}`} />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
