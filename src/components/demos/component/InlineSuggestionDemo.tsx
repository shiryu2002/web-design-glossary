import type { DemoProps } from '../../../types';
import styles from './InlineSuggestionDemo.module.css';

export function InlineSuggestionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.editor}>
        <div className={styles.line}>
          <span className={styles.lineNo}>1</span>
          <span className={styles.kw}>function</span>{' '}
          <span className={styles.fn}>greet</span>(name) {'{'}
        </div>
        <div className={styles.line}>
          <span className={styles.lineNo}>2</span>
          <span className={styles.indent}>  </span>
          <span className={styles.kw}>return</span>{' '}
          <span className={styles.str}>`Hello, </span>
          <span className={styles.ghost}>{'${name}!`;'}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.lineNo}>3</span>
          {'}'}
        </div>
        <div className={styles.hint}>
          <span className={styles.kbd}>Tab</span> で候補を採用
        </div>
      </div>
    </div>
  );
}
