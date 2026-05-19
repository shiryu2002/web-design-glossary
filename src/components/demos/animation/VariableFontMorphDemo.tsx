import type { DemoProps } from '../../../types';
import styles from './VariableFontMorphDemo.module.css';

export function VariableFontMorphDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.morph : styles.fixed;
  return (
    <div className={styles.stage}>
      <span className={`${styles.text} ${cls}`}>Type</span>
    </div>
  );
}
