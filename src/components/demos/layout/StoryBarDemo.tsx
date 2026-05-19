import type { DemoProps } from '../../../types';
import styles from './StoryBarDemo.module.css';

const stories = ['You', 'Aki', 'Mio', 'Ren', 'Yui', 'Ken', 'Sho'];

export function StoryBarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bar}>
        {stories.map((s, i) => (
          <div key={s} className={styles.item}>
            <div className={`${styles.ring} ${i === 0 ? styles.self : ''}`}>
              <div className={styles.avatar}>{s[0]}</div>
            </div>
            <div className={styles.name}>{s}</div>
          </div>
        ))}
      </div>
      <div className={styles.feed}>feed</div>
    </div>
  );
}
