import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './NumberStepperDemo.module.css';

export function NumberStepperDemo(_: DemoProps) {
  const [n, setN] = useState(2);
  return (
    <div className={styles.stage}>
      <div className={styles.group}>
        <button className={styles.btn} onClick={() => setN(Math.max(0, n - 1))}>
          −
        </button>
        <div className={styles.value}>{n}</div>
        <button className={styles.btn} onClick={() => setN(n + 1)}>
          ＋
        </button>
      </div>
      <div className={styles.label}>個数</div>
    </div>
  );
}
