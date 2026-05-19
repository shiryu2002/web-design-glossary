import { useRef, useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './MagneticDemo.module.css';

export function MagneticDemo(_: DemoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  return (
    <div
      ref={ref}
      className={styles.stage}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <div
        className={styles.btn}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        HOVER
      </div>
    </div>
  );
}
