import type { DemoProps } from '../../../types';
import styles from './LineHeightDemo.module.css';

const TEXT = '行間が狭いと文字がぎゅっと詰まり読みにくくなり、広いと一行ずつ呼吸を感じる読み心地になる。';

export function LineHeightDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <p className={mode === 'after' ? styles.spacious : styles.cramped}>
        {TEXT}
      </p>
    </div>
  );
}
