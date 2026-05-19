import type { DemoProps } from '../../../types';
import styles from './CodeBlockDemo.module.css';

export function CodeBlockDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.window}>
        <div className={styles.bar}>
          <span className={styles.dot} style={{ background: '#ff5f57' }} />
          <span className={styles.dot} style={{ background: '#ffbd2e' }} />
          <span className={styles.dot} style={{ background: '#28c93f' }} />
          <span className={styles.lang}>js</span>
        </div>
        <pre className={styles.code}>
          <span className={styles.kw}>const</span>{' '}
          <span className={styles.var}>name</span> ={' '}
          <span className={styles.str}>'Hello'</span>;
          {'\n'}
          <span className={styles.kw}>function</span>{' '}
          <span className={styles.fn}>greet</span>() {`{`}
          {'\n'}  <span className={styles.kw}>return</span> name;
          {'\n'}{`}`}
        </pre>
      </div>
    </div>
  );
}
