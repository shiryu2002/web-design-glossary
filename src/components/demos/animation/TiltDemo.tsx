import { useRef, useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './TiltDemo.module.css';

export function TiltDemo(_: DemoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setT({ rx: -y * 20, ry: x * 20 });
  };

  return (
    <div
      ref={ref}
      className={styles.stage}
      onMouseMove={handleMove}
      onMouseLeave={() => setT({ rx: 0, ry: 0 })}
    >
      <div
        className={styles.card}
        style={{ transform: `perspective(500px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)` }}
      >
        TILT
      </div>
    </div>
  );
}
