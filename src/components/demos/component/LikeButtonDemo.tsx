import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './LikeButtonDemo.module.css';

export function LikeButtonDemo(_: DemoProps) {
  const [liked, setLiked] = useState(false);
  return (
    <div className={styles.stage}>
      <button
        className={`${styles.btn} ${liked ? styles.on : ''}`}
        onClick={() => setLiked((v) => !v)}
      >
        <span className={styles.heart}>♥</span>
        <span className={styles.count}>{liked ? 124 : 123}</span>
      </button>
    </div>
  );
}
