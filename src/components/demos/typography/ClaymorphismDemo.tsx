import type { DemoProps } from '../../../types';
import styles from './ClaymorphismDemo.module.css';

export function ClaymorphismDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
    </div>
  );
}
