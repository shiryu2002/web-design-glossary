import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './CheckboxDemo.module.css';

export function CheckboxDemo(_: DemoProps) {
  const [checks, setChecks] = useState([true, false, true]);
  const toggle = (i: number) =>
    setChecks((cs) => cs.map((c, j) => (i === j ? !c : c)));
  const labels = ['利用規約に同意', 'メルマガを受け取る', 'プライバシーポリシー'];
  return (
    <div className={styles.stage}>
      {labels.map((l, i) => (
        <label className={styles.row} key={l}>
          <span
            className={`${styles.box} ${checks[i] ? styles.checked : ''}`}
            onClick={() => toggle(i)}
          >
            {checks[i] && '✓'}
          </span>
          <span className={styles.text}>{l}</span>
        </label>
      ))}
    </div>
  );
}
