import type { DemoProps } from '../../../types';
import styles from './DataTableDemo.module.css';

const rows = [
  { id: 1, name: '田中 太郎', role: 'Admin', selected: true },
  { id: 2, name: '佐藤 花子', role: 'Editor', selected: false },
  { id: 3, name: '鈴木 一郎', role: 'Viewer', selected: true },
  { id: 4, name: '高橋 美咲', role: 'Editor', selected: false },
];

export function DataTableDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkCol}>
              <span className={`${styles.box} ${styles.partial}`}>−</span>
            </th>
            <th className={styles.sortable}>
              名前<span className={styles.sortAsc}>▲</span>
            </th>
            <th className={styles.sortable}>
              役割<span className={styles.sortDim}>▼</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id} className={i % 2 === 1 ? styles.zebra : ''}>
              <td>
                <span
                  className={`${styles.box} ${
                    r.selected ? styles.checked : ''
                  }`}
                >
                  {r.selected ? '✓' : ''}
                </span>
              </td>
              <td>{r.name}</td>
              <td className={styles.muted}>{r.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
