import type { DemoProps } from '../../../types';
import styles from './PasswordStrengthDemo.module.css';

export function PasswordStrengthDemo({ mode = 'after' }: DemoProps) {
  const level: number = mode === 'before' ? 1 : 4;
  const label =
    level === 1 ? '弱い' : level === 2 ? '普通' : level === 3 ? '良い' : '強い';
  const value = mode === 'before' ? '••••' : '••••••••••••';
  return (
    <div className={styles.stage}>
      <div className={styles.label}>パスワード</div>
      <div className={styles.field}>{value}</div>
      <div className={styles.bars}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`${styles.bar} ${i <= level ? styles[`l${level}`] : ''}`}
          />
        ))}
      </div>
      <div className={`${styles.note} ${styles[`text${level}`]}`}>
        強度: {label}
      </div>
    </div>
  );
}
