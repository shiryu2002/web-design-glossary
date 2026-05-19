import type { DemoProps } from '../../../types';
import styles from './LogoMarqueeDemo.module.css';

const logos = ['ACME', 'NOVA', 'ORBIT', 'LUME', 'ZINC', 'PIKA', 'KORE'];

export function LogoMarqueeDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className={styles.logo}>{l}</div>
          ))}
        </div>
      </div>
      <div className={styles.caption}>infinite scroll</div>
    </div>
  );
}
