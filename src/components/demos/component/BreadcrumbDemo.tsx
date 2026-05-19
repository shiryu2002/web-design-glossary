import type { DemoProps } from '../../../types';
import styles from './BreadcrumbDemo.module.css';

const crumbs = ['ホーム', 'カテゴリ', 'デザイン', '記事タイトル'];

export function BreadcrumbDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <nav className={styles.crumbs} aria-label="パンくず">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <span key={i} className={styles.itemWrap}>
              <span className={last ? styles.current : styles.link}>{c}</span>
              {!last && <span className={styles.sep}>›</span>}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
