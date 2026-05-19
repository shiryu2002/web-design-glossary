import { useRef, useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './CursorFollowDemo.module.css';

export function CursorFollowDemo(_: DemoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 80, y: 60 });
  const [visible, setVisible] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      className={styles.stage}
      onMouseMove={handleMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className={styles.label}>move your mouse</div>
      <div
        className={styles.follower}
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
}
