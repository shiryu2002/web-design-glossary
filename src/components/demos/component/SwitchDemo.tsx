import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './SwitchDemo.module.css';

export function SwitchDemo(_: DemoProps) {
  const [on1, setOn1] = useState(true);
  const [on2, setOn2] = useState(false);
  return (
    <div className={styles.stage}>
      <button
        className={`${styles.sw} ${on1 ? styles.on : ''}`}
        onClick={() => setOn1((v) => !v)}
        aria-pressed={on1}
      >
        <span className={styles.thumb} />
      </button>
      <button
        className={`${styles.sw} ${on2 ? styles.on : ''}`}
        onClick={() => setOn2((v) => !v)}
        aria-pressed={on2}
      >
        <span className={styles.thumb} />
      </button>
    </div>
  );
}
