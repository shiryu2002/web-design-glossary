import type { DemoProps } from '../../../types';
import styles from './AvatarGroupDemo.module.css';

const avatars = [
  { i: 'A', c: '#5b4ee3' },
  { i: 'B', c: '#4eb87a' },
  { i: 'C', c: '#e39b5b' },
  { i: 'D', c: '#d34c4c' },
  { i: 'E', c: '#3a8ed1' },
];

export function AvatarGroupDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.label}>参加者</div>
      <div className={styles.group}>
        {avatars.map((a, i) => (
          <div
            key={i}
            className={styles.avatar}
            style={{ background: a.c, zIndex: avatars.length - i }}
          >
            {a.i}
          </div>
        ))}
        <div className={`${styles.avatar} ${styles.more}`}>+7</div>
      </div>
      <div className={styles.sub}>合計 12 名がオンライン</div>
    </div>
  );
}
