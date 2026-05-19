import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './SegmentedControlDemo.module.css';

const segments = ['Day', 'Week', 'Month'];

export function SegmentedControlDemo(_: DemoProps) {
  const [active, setActive] = useState(1);
  return (
    <div className={styles.stage}>
      <div className={styles.group}>
        {segments.map((s, i) => (
          <button
            key={s}
            className={`${styles.seg} ${active === i ? styles.active : ''}`}
            onClick={() => setActive(i)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
