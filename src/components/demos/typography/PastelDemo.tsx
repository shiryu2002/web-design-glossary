import type { DemoProps } from '../../../types';
import styles from './PastelDemo.module.css';

const palette = ['#ffd6e0', '#ffe6c2', '#f7f3c2', '#d2efd1', '#c7e1f2', '#dcd4ff'];

export function PastelDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {palette.map((c) => (
        <div className={styles.swatch} key={c} style={{ background: c }} />
      ))}
    </div>
  );
}
