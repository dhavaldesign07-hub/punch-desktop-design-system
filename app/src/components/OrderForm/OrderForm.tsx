import styles from './OrderForm.module.css';
import { Tag } from '../Tag/Tag';
import { PositionType, type PositionValue } from '../PositionType/PositionType';
import { OrderType, type OrderValue } from '../OrderType/OrderType';
import { NumberInput } from '../NumberInput/NumberInput';
import { BuySellUnit, type OrderSide } from '../BuySellUnit/BuySellUnit';

export interface OrderFormProps {
  scripName: string;
  changeAbsolute: string;
  changePercent: string;
  changeDirection?: 'up' | 'down';
  exchange?: string;
  positionType: PositionValue;
  orderType: OrderValue;
  qty: number;
  onQtyChange?: (qty: number) => void;
  lotSize?: number;
  price?: number;
  onPriceChange?: (price: number) => void;
  activeSide: OrderSide;
  onSideChange?: (side: OrderSide) => void;
  margin: string;
  brokerage: string;
  taxes: string;
}

function MarketDepthButton() {
  return (
    <button type="button" className={styles.depthBtn} aria-label="Market depth">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.5H11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M2.5 7H11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M2.5 10.5H11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </button>
  );
}

export function OrderForm({
  scripName,
  changeAbsolute,
  changePercent,
  changeDirection = 'up',
  exchange = 'NSE',
  positionType,
  orderType,
  qty,
  onQtyChange,
  lotSize = 1,
  price,
  onPriceChange,
  activeSide,
  onSideChange,
  margin,
  brokerage,
  taxes,
}: OrderFormProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.scripInfo}>
          <span className={styles.scripName}>{scripName}</span>
          <div className={styles.changeRow}>
            <span className={`${styles.changeValue} ${changeDirection === 'down' ? styles.negative : ''}`}>
              {changeAbsolute}
            </span>
            <span className={`${styles.changeValue} ${changeDirection === 'down' ? styles.negative : ''}`}>
              {changePercent}
            </span>
            <Tag hasDropdown>{exchange}</Tag>
          </div>
        </div>
        <div className={styles.tabsRow}>
          <PositionType value={positionType} />
          <OrderType value={orderType} />
          <MarketDepthButton />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.row}>
        <span className={styles.rowLabel}>
          Qty <span className={styles.hint}>[1 Lot = {lotSize} Qty]</span>
        </span>
        <NumberInput value={qty} onChange={onQtyChange} variant="enabled" />
      </div>

      <div className={styles.divider} />

      <div className={styles.row}>
        <span className={styles.rowLabel}>
          {orderType === 'Market' ? 'Market Price' : orderType === 'Limit' ? 'Limit Price' : 'Trigger Price'}
        </span>
        {orderType === 'Market' ? (
          <div className={styles.staticPriceBox}>Market</div>
        ) : (
          <NumberInput value={price ?? 0} onChange={onPriceChange} variant="withoutSteppers" />
        )}
      </div>

      <div className={styles.divider} />

      <div className={styles.footer}>
        <BuySellUnit activeSide={activeSide} onSideChange={onSideChange} />
      </div>

      <div className={styles.divider} />

      <div className={styles.marginRow}>
        <span>Margin {margin}</span>
        <span>
          Brokerage {brokerage} + Taxes {taxes}
        </span>
      </div>
    </div>
  );
}
