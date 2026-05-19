import type { DemoProps } from '../../../types';
import styles from './LogoBarDemo.module.css';

const logos = ['ACME', 'NOVA', 'ORBIT', 'LUME', 'ZINC'];

export function LogoBarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.caption}>Trusted by</div>
      <div className={styles.bar}>
        {logos.map((l) => (
          <div key={l} className={styles.logo}>{l}</div>
        ))}
      </div>
    </div>
  );
}
