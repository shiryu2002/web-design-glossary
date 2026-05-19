import { useEffect, useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './CounterUpDemo.module.css';

export function CounterUpDemo(_: DemoProps) {
  const target = 12345;
  const [n, setN] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 2000;
    const loop = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(target * eased));
      if (elapsed < duration + 1200) {
        frame = requestAnimationFrame(loop);
      } else {
        start = ts;
        setN(0);
        frame = requestAnimationFrame(loop);
      }
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={styles.stage}>
      <div className={styles.label}>登録ユーザー</div>
      <div className={styles.num}>{n.toLocaleString()}</div>
    </div>
  );
}
