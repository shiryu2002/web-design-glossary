import type { DemoProps } from '../../../types';
import styles from './VerticalRhythmDemo.module.css';

export function VerticalRhythmDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.rhythm : styles.irregular;
  return (
    <div className={`${styles.stage} ${cls}`}>
      <div className={styles.h1}>見出し</div>
      <div className={styles.p}>本文の1行目。</div>
      <div className={styles.p}>本文の2行目。</div>
      <div className={styles.h2}>小見出し</div>
      <div className={styles.p}>続きの段落。</div>
    </div>
  );
}
