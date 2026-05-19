import type { DemoProps } from '../../../types';
import styles from './StickyFooterDemo.module.css';

export function StickyFooterDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.body}>
        {mode === 'after' ? <div className={styles.short}>短いコンテンツ</div> : null}
        {mode === 'before' ? <div className={styles.short}>短いコンテンツ</div> : null}
      </div>
      <div className={mode === 'after' ? styles.footerStuck : styles.footerFloat}>
        Footer
      </div>
    </div>
  );
}
