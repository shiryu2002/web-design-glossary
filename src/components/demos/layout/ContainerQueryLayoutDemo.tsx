import type { DemoProps } from '../../../types';
import styles from './ContainerQueryLayoutDemo.module.css';

export function ContainerQueryLayoutDemo({ mode = 'after' }: DemoProps) {
  const isAfter = mode === 'after';
  return (
    <div className={styles.stage}>
      <div className={`${styles.container} ${isAfter ? styles.wide : styles.narrow}`}>
        <div className={styles.card}>
          <div className={styles.thumb}>◧</div>
          <div className={styles.body}>
            <div className={styles.title}>Card title</div>
            <div className={styles.text}>Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
      <div className={styles.label}>{isAfter ? 'container ≥ 200px → row' : 'container < 200px → column'}</div>
    </div>
  );
}
