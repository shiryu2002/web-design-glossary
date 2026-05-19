import type { DemoProps } from '../../../types';
import styles from './ImageMosaicDemo.module.css';

const colors = [
  '#ff7a59', '#5b4ee3', '#6cd49c',
  '#ffcf6f', '#ff5d8f', '#3ad8ff',
  '#b35bf2', '#ff9a7a',
];

export function ImageMosaicDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      {colors.map((c, i) => (
        <div className={styles.tile} key={i} style={{ background: c }} />
      ))}
    </div>
  );
}
