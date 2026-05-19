import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './ToggleGroupDemo.module.css';

const options = [
  { id: 'b', icon: 'B', style: { fontWeight: 900 } },
  { id: 'i', icon: 'I', style: { fontStyle: 'italic' } },
  { id: 'u', icon: 'U', style: { textDecoration: 'underline' } },
  { id: 's', icon: 'S', style: { textDecoration: 'line-through' } },
];

export function ToggleGroupDemo(_: DemoProps) {
  const [active, setActive] = useState<string[]>(['b']);
  const toggle = (id: string) =>
    setActive((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id],
    );
  return (
    <div className={styles.stage}>
      <div className={styles.group}>
        {options.map((o) => (
          <button
            key={o.id}
            className={`${styles.btn} ${active.includes(o.id) ? styles.on : ''}`}
            style={o.style as React.CSSProperties}
            onClick={() => toggle(o.id)}
          >
            {o.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
