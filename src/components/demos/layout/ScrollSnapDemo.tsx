import type { DemoProps } from '../../../types';
import styles from './ScrollSnapDemo.module.css';

const colors = ['#ff7a59', '#5b4ee3', '#6cd49c', '#ffcf6f'];

export function ScrollSnapDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.track}>
        {colors.map((c, i) => (
          <div className={styles.slide} key={i} style={{ background: c }}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
