import type { DemoProps } from '../../../types';
import styles from './CardDemo.module.css';

export function CardDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.cover}>
          <div className={styles.shape1} />
          <div className={styles.shape2} />
        </div>
        <div className={styles.body}>
          <div className={styles.title}>京都・嵐山ガイド</div>
          <div className={styles.desc}>
            竹林と桂川を巡る、半日コースのおすすめ。
          </div>
          <div className={styles.foot}>
            <button className={styles.btn}>詳細を見る</button>
          </div>
        </div>
      </div>
    </div>
  );
}
