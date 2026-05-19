import type { DemoProps } from '../../../types';
import styles from './DisplayFontDemo.module.css';

export function DisplayFontDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>BOLD</div>
      <div className={styles.note}>Display / 見出し用装飾的</div>
    </div>
  );
}
