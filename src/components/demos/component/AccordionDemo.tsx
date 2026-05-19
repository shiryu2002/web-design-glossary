import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './AccordionDemo.module.css';

const items = [
  { q: '質問 1', a: 'これは1つ目の答えです。' },
  { q: '質問 2', a: 'これは2つ目の答え。' },
  { q: '質問 3', a: 'これは3つ目の答え。' },
];

export function AccordionDemo(_: DemoProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={styles.stage}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={styles.item} key={i}>
            <button
              className={styles.head}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.q}</span>
              <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
                ⌃
              </span>
            </button>
            <div className={`${styles.body} ${isOpen ? styles.bodyOpen : ''}`}>
              <div className={styles.bodyInner}>{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
