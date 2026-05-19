import type { DemoProps } from '../../../types';
import styles from './FeatureListDemo.module.css';

const features = [
  { i: '⚡', t: '高速', s: '爆速で動く' },
  { i: '🔒', t: '安全', s: '暗号化通信' },
  { i: '🎨', t: '美しい', s: '洗練デザイン' },
];

export function FeatureListDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {features.map((f, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.icon}>{f.i}</div>
          <div className={styles.body}>
            <div className={styles.title}>{f.t}</div>
            <div className={styles.sub}>{f.s}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
