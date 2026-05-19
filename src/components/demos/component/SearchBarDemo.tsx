import type { DemoProps } from '../../../types';
import styles from './SearchBarDemo.module.css';

export function SearchBarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bar}>
        <span className={styles.icon}>🔍</span>
        <span className={styles.placeholder}>キーワードを入力</span>
        <span className={styles.kbd}>⌘K</span>
      </div>
    </div>
  );
}
