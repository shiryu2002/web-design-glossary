import { useState } from 'react';
import type { DemoProps } from '../../../types';
import styles from './StarRatingDemo.module.css';

export function StarRatingDemo(_: DemoProps) {
  const [rating, setRating] = useState(4);
  return (
    <div className={styles.stage}>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`${styles.star} ${n <= rating ? styles.on : ''}`}
            onClick={() => setRating(n)}
          >
            ★
          </span>
        ))}
      </div>
      <div className={styles.label}>{rating}.0</div>
    </div>
  );
}
