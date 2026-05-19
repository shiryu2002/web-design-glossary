import type { DemoProps } from '../../../types';
import styles from './ComparisonTableDemo.module.css';

export function ComparisonTableDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <table className={styles.tbl}>
        <thead>
          <tr>
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Speed</td>
            <td className={styles.ok}>✓</td>
            <td className={styles.ng}>✕</td>
            <td className={styles.ok}>✓</td>
          </tr>
          <tr>
            <td>Quality</td>
            <td className={styles.ok}>✓</td>
            <td className={styles.ok}>✓</td>
            <td className={styles.ng}>✕</td>
          </tr>
          <tr>
            <td>Price</td>
            <td className={styles.ng}>✕</td>
            <td className={styles.ok}>✓</td>
            <td className={styles.ok}>✓</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
