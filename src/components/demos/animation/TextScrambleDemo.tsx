import { useEffect, useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './TextScrambleDemo.module.css';

const TARGET = 'DESIGN';
const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&';

export function TextScrambleDemo({ mode = 'after' }: DemoProps) {
  const [text, setText] = useState(TARGET);

  useEffect(() => {
    if (mode === 'before') {
      setText(TARGET);
      return;
    }
    let t = 0;
    const id = window.setInterval(() => {
      t += 1;
      const phase = t % 30;
      if (phase >= 22) {
        setText(TARGET);
      } else {
        const reveal = Math.floor((phase / 22) * TARGET.length);
        const scrambled = TARGET.split('')
          .map((c, i) => (i < reveal ? c : POOL[Math.floor(Math.random() * POOL.length)]))
          .join('');
        setText(scrambled);
      }
    }, 80);
    return () => window.clearInterval(id);
  }, [mode]);

  return (
    <div className={styles.stage}>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
