import type { DemoProps } from '../../../types';
import styles from './HighlightDemo.module.css';

export function HighlightDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <p>
        ここの<span className={mode === 'after' ? styles.mark : ''}>大事な部分</span>を
        強調したいときに使う。
      </p>
    </div>
  );
}
