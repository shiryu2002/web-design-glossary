import type { DemoProps } from '../../../types';
import styles from './VerticalTextDemo.module.css';

export function VerticalTextDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <p className={mode === 'after' ? styles.vertical : styles.horizontal}>
        春は曙、ようよう白くなりゆく山際、すこし明かりて。
      </p>
    </div>
  );
}
