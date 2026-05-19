import type { DemoProps } from '../../../types';
import styles from './TimePickerDemo.module.css';

const hours = ['08', '09', '10', '11', '12'];
const minutes = ['00', '15', '30', '45', '50'];

export function TimePickerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.wheel}>
        <div className={styles.col}>
          {hours.map((h, i) => (
            <div
              key={h}
              className={`${styles.item} ${i === 2 ? styles.selected : ''}`}
            >
              {h}
            </div>
          ))}
        </div>
        <div className={styles.sep}>:</div>
        <div className={styles.col}>
          {minutes.map((m, i) => (
            <div
              key={m}
              className={`${styles.item} ${i === 2 ? styles.selected : ''}`}
            >
              {m}
            </div>
          ))}
        </div>
        <div className={styles.mask} aria-hidden="true" />
      </div>
    </div>
  );
}
