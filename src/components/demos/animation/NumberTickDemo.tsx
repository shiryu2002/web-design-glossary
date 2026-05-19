import type { DemoProps } from '../../../types';
import styles from './NumberTickDemo.module.css';

export function NumberTickDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.board}>
        <Flap />
        <Flap delay="0.4s" />
        <span className={styles.sep}>:</span>
        <Flap delay="0.8s" />
        <Flap delay="1.2s" />
      </div>
    </div>
  );
}

function Flap({ delay = '0s' }: { delay?: string }) {
  return (
    <div className={styles.flap}>
      <div className={styles.card} style={{ animationDelay: delay }}>
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </div>
    </div>
  );
}
