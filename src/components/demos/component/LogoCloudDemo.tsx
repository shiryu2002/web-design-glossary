import type { DemoProps } from '../../../types';
import styles from './LogoCloudDemo.module.css';

const logos = ['◆ ALPHA', '◯ BETA', '▲ GAMMA', '✦ DELTA', '★ EPSILON', '◐ ZETA'];

export function LogoCloudDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.title}>導入企業</div>
      <div className={styles.row}>
        {logos.map((l) => (
          <span className={styles.logo} key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}
