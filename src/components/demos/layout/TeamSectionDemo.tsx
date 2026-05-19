import type { DemoProps } from '../../../types';
import styles from './TeamSectionDemo.module.css';

const members = [
  { initial: 'A', name: 'Aki', role: 'CEO' },
  { initial: 'M', name: 'Mio', role: 'CTO' },
  { initial: 'R', name: 'Ren', role: 'Design' },
  { initial: 'Y', name: 'Yui', role: 'Eng' },
];

export function TeamSectionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.title}>Our team</div>
      <div className={styles.grid}>
        {members.map((m) => (
          <div key={m.name} className={styles.card}>
            <div className={styles.avatar}>{m.initial}</div>
            <div className={styles.name}>{m.name}</div>
            <div className={styles.role}>{m.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
