import type { DemoProps } from '../../../types';
import styles from './MobileTabBarDemo.module.css';

const tabs = [
  { icon: '⌂', label: 'Home', active: true },
  { icon: '◎', label: 'Search' },
  { icon: '＋', label: 'Add' },
  { icon: '♡', label: 'Likes' },
  { icon: '☻', label: 'Me' },
];

export function MobileTabBarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.screen}>
        <div className={styles.content}>Screen</div>
        <div className={styles.tabbar}>
          {tabs.map((t) => (
            <div key={t.label} className={`${styles.tab} ${t.active ? styles.active : ''}`}>
              <div className={styles.icon}>{t.icon}</div>
              <div className={styles.label}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
