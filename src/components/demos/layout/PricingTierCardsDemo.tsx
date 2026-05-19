import type { DemoProps } from '../../../types';
import styles from './PricingTierCardsDemo.module.css';

const tiers = [
  { name: 'Free', price: '0', popular: false },
  { name: 'Pro', price: '12', popular: true },
  { name: 'Team', price: '29', popular: false },
];

export function PricingTierCardsDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {tiers.map((t) => (
        <div key={t.name} className={`${styles.card} ${t.popular ? styles.popular : ''}`}>
          {t.popular && <div className={styles.badge}>Popular</div>}
          <div className={styles.name}>{t.name}</div>
          <div className={styles.price}>
            <span className={styles.cur}>$</span>{t.price}
          </div>
          <div className={styles.feat}>• 10 seats</div>
          <div className={styles.feat}>• Email</div>
          <div className={styles.cta}>Choose</div>
        </div>
      ))}
    </div>
  );
}
