import type { DemoProps } from '../../../types';
import styles from './NumberRollDemo.module.css';

export function NumberRollDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.snap}>42</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.digit}>
        <div className={styles.reel}>
          <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
          <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
        </div>
      </div>
      <div className={styles.digit}>
        <div className={styles.reel}>
          <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
          <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
        </div>
      </div>
    </div>
  );
}
