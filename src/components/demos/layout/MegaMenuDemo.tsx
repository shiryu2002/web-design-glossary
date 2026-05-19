import type { DemoProps } from '../../../types';
import styles from './MegaMenuDemo.module.css';

export function MegaMenuDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.header}>
        <span>Logo</span>
        <span className={styles.tabActive}>Products ▼</span>
        <span>Pricing</span>
        <span>Docs</span>
      </div>
      <div className={styles.mega}>
        <div className={styles.colHead}>Build</div>
        <div className={styles.colHead}>Run</div>
        <div className={styles.colHead}>Monitor</div>
        <div className={styles.cell}>Editor</div>
        <div className={styles.cell}>Hosting</div>
        <div className={styles.cell}>Logs</div>
        <div className={styles.cell}>CI/CD</div>
        <div className={styles.cell}>Functions</div>
        <div className={styles.cell}>Alerts</div>
      </div>
    </div>
  );
}
