import type { DemoProps } from '../../../types';
import styles from './TagInputDemo.module.css';

const tags = ['React', 'TypeScript', 'CSS'];

export function TagInputDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.field}>
        {tags.map((t) => (
          <span className={styles.tag} key={t}>
            {t} <span className={styles.x}>✕</span>
          </span>
        ))}
        <span className={styles.cursor}>|</span>
      </div>
    </div>
  );
}
