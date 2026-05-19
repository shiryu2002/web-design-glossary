import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './TabsDemo.module.css';

const tabs = ['概要', '詳細', 'レビュー'];

export function TabsDemo(_: DemoProps) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.stage}>
      <div className={styles.tabs}>
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`${styles.tab} ${active === i ? styles.active : ''}`}
            onClick={() => setActive(i)}
          >
            {t}
          </button>
        ))}
        <div className={styles.indicator} style={{ left: `${active * 33.33}%` }} />
      </div>
      <div className={styles.panel}>
        <div className={styles.line} />
        <div className={styles.lineShort} />
      </div>
    </div>
  );
}
