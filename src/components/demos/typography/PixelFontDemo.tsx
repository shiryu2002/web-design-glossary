import type { DemoProps } from '../../../types';
import styles from './PixelFontDemo.module.css';

export function PixelFontDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.text}>PIXEL</div>
      <div className={styles.note}>Pixel / 8bit風</div>
    </div>
  );
}
