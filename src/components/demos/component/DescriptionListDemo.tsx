import type { DemoProps } from '../../../types';
import styles from './DescriptionListDemo.module.css';

const items = [
  { l: '氏名', v: '田中 太郎' },
  { l: 'メール', v: 'tanaka@example.com' },
  { l: '電話', v: '+81 90 1234 5678' },
  { l: 'ロール', v: '管理者' },
];

export function DescriptionListDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <dl className={styles.list}>
        {items.map((it) => (
          <div key={it.l} className={styles.row}>
            <dt className={styles.dt}>{it.l}</dt>
            <dd className={styles.dd}>{it.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
