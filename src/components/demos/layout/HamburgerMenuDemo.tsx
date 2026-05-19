import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './HamburgerMenuDemo.module.css';

export function HamburgerMenuDemo(_: DemoProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.stage}>
      <button
        className={`${styles.burger} ${open ? styles.open : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="menu"
      >
        <span /><span /><span />
      </button>
      <nav className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
        <div className={styles.item}>Home</div>
        <div className={styles.item}>About</div>
        <div className={styles.item}>Contact</div>
      </nav>
    </div>
  );
}
