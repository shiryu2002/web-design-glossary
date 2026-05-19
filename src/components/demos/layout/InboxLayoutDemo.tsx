import type { DemoProps } from '../../../types';
import styles from './InboxLayoutDemo.module.css';

const rows = [
  { from: 'Aki', subj: 'Meeting moved to 3pm', time: '10:24', unread: true },
  { from: 'Mio', subj: 'Re: design review feedback', time: '09:12', unread: true },
  { from: 'Ren', subj: 'Lunch plans this Friday?', time: 'Yes', unread: false },
  { from: 'Yui', subj: 'Quarterly report draft', time: 'Yes', unread: false },
  { from: 'Ken', subj: 'Welcome to the team', time: 'Mon', unread: false },
];

export function InboxLayoutDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {rows.map((r, i) => (
        <div key={i} className={`${styles.row} ${r.unread ? styles.unread : ''}`}>
          <div className={styles.dot} />
          <div className={styles.from}>{r.from}</div>
          <div className={styles.subj}>{r.subj}</div>
          <div className={styles.time}>{r.time}</div>
        </div>
      ))}
    </div>
  );
}
