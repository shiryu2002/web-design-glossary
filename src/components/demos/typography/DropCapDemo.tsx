import type { DemoProps } from '../../../types';
import styles from './DropCapDemo.module.css';

export function DropCapDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <p className={mode === 'after' ? styles.withCap : styles.plain}>
        Once upon a time, a designer needed a flourish for the very first
        letter of a paragraph. They reached for the drop cap.
      </p>
    </div>
  );
}
