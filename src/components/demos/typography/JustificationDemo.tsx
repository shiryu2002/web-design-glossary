import type { DemoProps } from '../../../types';
import styles from './JustificationDemo.module.css';

const TEXT =
  'タイポグラフィは読みやすさと美しさのバランスを取る技術。揃え方ひとつで印象は大きく変わる。';

export function JustificationDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <p className={mode === 'after' ? styles.justify : styles.left}>{TEXT}</p>
      <div className={styles.note}>
        {mode === 'after' ? '両端揃え（after）' : '左揃え（before）'}
      </div>
    </div>
  );
}
