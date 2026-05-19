import type { DemoProps } from '../../../types';
import styles from './EarthToneDemo.module.css';

const palette = ['#7a5a3a', '#a47a4f', '#c69862', '#d4b388', '#9a7e58', '#5f4a2e'];

export function EarthToneDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {palette.map((c) => (
        <div className={styles.swatch} key={c} style={{ background: c }} />
      ))}
    </div>
  );
}
