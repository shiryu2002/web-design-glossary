import type { DemoProps } from '../../../types';
import styles from './CommitmentConsistencyDemo.module.css';

export function CommitmentConsistencyDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.step}>① 名前は？</div>
      <div className={styles.step}>② メールは？</div>
      <div className={styles.step}>③ ご職業は？</div>
      <div className={styles.note}>小さな Yes を積み重ね</div>
    </div>
  );
}
