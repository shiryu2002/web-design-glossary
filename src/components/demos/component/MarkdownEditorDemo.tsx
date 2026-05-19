import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './MarkdownEditorDemo.module.css';

type Tab = 'split' | 'edit' | 'preview';

export function MarkdownEditorDemo(_: DemoProps) {
  const [tab, setTab] = useState<Tab>('split');
  return (
    <div className={styles.stage}>
      <div className={styles.tabs}>
        {(['split', 'edit', 'preview'] as Tab[]).map((t) => (
          <button
            key={t}
            className={`${styles.tab} ${tab === t ? styles.active : ''}`}
            onClick={() => setTab(t)}
          >
            {t === 'split' ? '分割' : t === 'edit' ? '編集' : 'プレビュー'}
          </button>
        ))}
      </div>
      <div className={styles.panels}>
        {tab !== 'preview' && (
          <div className={styles.editor}>
            <div className={styles.line}>
              <span className={styles.hash}>#</span> タイトル
            </div>
            <div className={styles.line}>
              **強調**と<span className={styles.code}>`code`</span>
            </div>
            <div className={styles.line}>- リスト項目</div>
          </div>
        )}
        {tab !== 'edit' && (
          <div className={styles.preview}>
            <h3>タイトル</h3>
            <p>
              <b>強調</b>と<code>code</code>
            </p>
            <ul>
              <li>リスト項目</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
