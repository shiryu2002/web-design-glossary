import type { DemoProps } from '../../../types';
import styles from './PricingTableDemo.module.css';

const plans = [
  { name: 'Free', price: '¥0', feats: 3, hi: false },
  { name: 'Pro', price: '¥980', feats: 6, hi: true },
  { name: 'Team', price: '¥2980', feats: 9, hi: false },
];

export function PricingTableDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {plans.map((p) => (
        <div key={p.name} className={`${styles.plan} ${p.hi ? styles.hi : ''}`}>
          <div className={styles.name}>{p.name}</div>
          <div className={styles.price}>{p.price}</div>
          {Array.from({ length: p.feats }).map((_, i) => (
            <div className={styles.feat} key={i} />
          ))}
        </div>
      ))}
    </div>
  );
}
