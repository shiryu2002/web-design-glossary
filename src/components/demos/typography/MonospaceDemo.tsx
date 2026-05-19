import type { DemoProps } from '../../../types';
import styles from './MonospaceDemo.module.css';

export function MonospaceDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <pre className={styles.code}>
        function hello() {`{`}{'\n'}
        {`  return 'world';`}{'\n'}
        {`}`}
      </pre>
    </div>
  );
}
