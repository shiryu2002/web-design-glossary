import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './InlineEditDemo.module.css';

export function InlineEditDemo(_: DemoProps) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('プロジェクト名');
  return (
    <div className={styles.stage}>
      {editing ? (
        <input
          autoFocus
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => e.key === 'Enter' && setEditing(false)}
        />
      ) : (
        <span
          className={styles.text}
          onClick={() => setEditing(true)}
          role="button"
        >
          {value}
          <span className={styles.pencil}>✎</span>
        </span>
      )}
    </div>
  );
}
