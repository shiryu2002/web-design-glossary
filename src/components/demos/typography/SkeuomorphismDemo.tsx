import type { DemoProps } from '../../../types';
import styles from './SkeuomorphismDemo.module.css';

export function SkeuomorphismDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <button type="button" className={styles.button}>Press</button>
      <div className={styles.note}>Skeuomorphism / 質感を模す</div>
    </div>
  );
}
