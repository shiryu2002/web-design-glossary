import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './RadioDemo.module.css';

const options = ['カード払い', '銀行振込', 'コンビニ決済'];

export function RadioDemo(_: DemoProps) {
  const [sel, setSel] = useState(0);
  return (
    <div className={styles.stage}>
      {options.map((o, i) => (
        <label key={o} className={styles.row} onClick={() => setSel(i)}>
          <span className={`${styles.ring} ${sel === i ? styles.on : ''}`}>
            {sel === i && <span className={styles.dot} />}
          </span>
          <span className={styles.text}>{o}</span>
        </label>
      ))}
    </div>
  );
}
