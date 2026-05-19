import styles from './SearchBar.module.css';

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className={styles.wrap}>
      <span className={styles.icon}>🔍</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="用語を検索（日本語/英語/説明）..."
        className={styles.input}
        aria-label="用語検索"
      />
      {value && (
        <button
          className={styles.clear}
          onClick={() => onChange('')}
          aria-label="検索クリア"
        >
          ✕
        </button>
      )}
    </div>
  );
}
