import type { DemoProps } from '../../../types';
import styles from './BlackletterDemo.module.css';

export function BlackletterDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>Gothic</div>
      <div className={styles.note}>Blackletter / 古典装飾体</div>
    </div>
  );
}
