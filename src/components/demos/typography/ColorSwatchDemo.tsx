import type { DemoProps } from '../../../types';
import styles from './ColorSwatchDemo.module.css';

const colors = [
  { c: '#5b4ee3', n: '500' },
  { c: '#8675ff', n: '400' },
  { c: '#b6a8ff', n: '300' },
  { c: '#dcd4ff', n: '200' },
  { c: '#ecebfd', n: '100' },
];

export function ColorSwatchDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {colors.map((s) => (
        <div className={styles.col} key={s.n}>
          <div className={styles.swatch} style={{ background: s.c }} />
          <div className={styles.label}>{s.n}</div>
        </div>
      ))}
    </div>
  );
}
