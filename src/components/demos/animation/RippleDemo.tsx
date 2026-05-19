import { useState, useRef } from 'react';
import type { DemoProps } from '../../../types';
import styles from './RippleDemo.module.css';

type Ripple = { id: number; x: number; y: number };

export function RippleDemo(_: DemoProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextId = useRef(0);

  const spawn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = nextId.current++;
    setRipples((rs) => [...rs, { id, x, y }]);
    setTimeout(() => {
      setRipples((rs) => rs.filter((r) => r.id !== id));
    }, 700);
  };

  return (
    <div className={styles.stage}>
      <button className={styles.btn} onClick={spawn}>
        クリックして！
        {ripples.map((r) => (
          <span
            key={r.id}
            className={styles.ripple}
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </button>
    </div>
  );
}
