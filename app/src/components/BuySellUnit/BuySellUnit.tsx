import styles from './BuySellUnit.module.css';

export type OrderSide = 'buy' | 'sell';

export interface BuySellUnitProps {
  activeSide: OrderSide;
  onSideChange?: (side: OrderSide) => void;
}

export function BuySellUnit({ activeSide, onSideChange }: BuySellUnitProps) {
  const sellIsActive = activeSide === 'sell';
  const buyIsActive = activeSide === 'buy';

  const sellButton = (
    <button
      key="sell"
      type="button"
      className={`${styles.btn} ${styles.sell} ${sellIsActive ? styles.sellActive : styles.sellInactive}`}
      onClick={() => onSideChange?.('sell')}
    >
      {sellIsActive ? 'PUNCH TO SELL' : 'SELL'}
    </button>
  );

  const buyButton = (
    <button
      key="buy"
      type="button"
      className={`${styles.btn} ${styles.buy} ${buyIsActive ? styles.buyActive : styles.buyInactive}`}
      onClick={() => onSideChange?.('buy')}
    >
      {buyIsActive ? 'PUNCH TO BUY' : 'BUY'}
    </button>
  );

  return (
    <div className={styles.wrapper}>
      {sellButton}
      {buyButton}
    </div>
  );
}
