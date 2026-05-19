import type { DemoProps } from '../../../types';
import styles from './KanbanCardDemo.module.css';

export function KanbanCardDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.col}>
        <div className={styles.colHead}>Todo</div>
        <div className={styles.card}>
          <div className={styles.tag} style={{ background: '#ff5d8f' }}>緊急</div>
          <div className={styles.title}>修正タスク</div>
        </div>
        <div className={styles.card}>
          <div className={styles.tag} style={{ background: '#5b4ee3' }}>機能</div>
          <div className={styles.title}>UI更新</div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.colHead}>Doing</div>
        <div className={styles.card}>
          <div className={styles.tag} style={{ background: '#ffcf6f' }}>調査</div>
          <div className={styles.title}>原因究明</div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.colHead}>Done</div>
        <div className={styles.card}>
          <div className={styles.tag} style={{ background: '#6cd49c' }}>完了</div>
          <div className={styles.title}>テスト</div>
        </div>
      </div>
    </div>
  );
}
