import type { Category, CategoryMeta } from '../types';
import styles from './Tabs.module.css';

type Props = {
  categories: CategoryMeta[];
  active: Category;
  onChange: (id: Category) => void;
  disabled?: boolean;
};

export function Tabs({ categories, active, onChange, disabled = false }: Props) {
  return (
    <div
      className={`${styles.tabs} ${disabled ? styles.disabled : ''}`}
      role="tablist"
    >
      {categories.map((c) => {
        const isActive = !disabled && c.id === active;
        return (
          <button
            key={c.id}
            role="tab"
            aria-selected={isActive}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={() => onChange(c.id)}
            disabled={disabled}
          >
            <span className={styles.labelJa}>{c.labelJa}</span>
            <span className={styles.labelEn}>{c.labelEn}</span>
          </button>
        );
      })}
    </div>
  );
}
