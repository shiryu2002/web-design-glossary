import type { DemoProps } from '../../../types';
import styles from './WidowOrphanDemo.module.css';

export function WidowOrphanDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.column}>
          <p className={styles.para}>段落の最終行が次の段に残されるとウィドウになる。</p>
          <p className={styles.para}>
            読者の視線の流れを妨げ、組版上避けたい現象である。
          </p>
          <div className={styles.widow}>残された1語。</div>
        </div>
        <div className={styles.note}>widow が発生（before）</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.column}>
        <p className={styles.para}>段落の最終行が次の段に残されるとウィドウになる。</p>
        <p className={styles.para}>
          視線の流れを妨げないよう、調整して回避するのが基本。
        </p>
      </div>
      <div className={styles.note}>回避された状態（after）</div>
    </div>
  );
}
