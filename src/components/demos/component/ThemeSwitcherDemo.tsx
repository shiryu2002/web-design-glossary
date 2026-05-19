import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './ThemeSwitcherDemo.module.css';

type Theme = 'light' | 'dark' | 'system';

export function ThemeSwitcherDemo(_: DemoProps) {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <div className={styles.stage}>
      <div className={styles.label}>テーマ</div>
      <div className={styles.seg}>
        <button
          className={`${styles.opt} ${theme === 'light' ? styles.active : ''}`}
          onClick={() => setTheme('light')}
          aria-label="ライト"
        >
          <span className={styles.sun}>☀</span>
        </button>
        <button
          className={`${styles.opt} ${theme === 'dark' ? styles.active : ''}`}
          onClick={() => setTheme('dark')}
          aria-label="ダーク"
        >
          <span className={styles.moon}>☾</span>
        </button>
        <button
          className={`${styles.opt} ${theme === 'system' ? styles.active : ''}`}
          onClick={() => setTheme('system')}
          aria-label="システム"
        >
          <span className={styles.mon}>▭</span>
        </button>
      </div>
      <div className={styles.hint}>
        現在: {theme === 'light' ? 'ライト' : theme === 'dark' ? 'ダーク' : 'システム'}
      </div>
    </div>
  );
}
