import type { DemoProps } from '../../../types';
import styles from './ListDetailDemo.module.css';

const items = ['Aki Tanaka', 'Mio Sato', 'Ren Kobayashi', 'Yui Nakamura'];

export function ListDetailDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <aside className={styles.list}>
        {items.map((it, i) => (
          <div key={it} className={`${styles.item} ${i === 1 ? styles.active : ''}`}>
            <div className={styles.avatar}>{it[0]}</div>
            <div className={styles.name}>{it}</div>
          </div>
        ))}
      </aside>
      <main className={styles.detail}>
        <div className={styles.bigAvatar}>M</div>
        <div className={styles.dName}>Mio Sato</div>
        <div className={styles.dSub}>Product designer</div>
        <div className={styles.dLine} />
        <div className={styles.dLine} style={{ width: '70%' }} />
      </main>
    </div>
  );
}
