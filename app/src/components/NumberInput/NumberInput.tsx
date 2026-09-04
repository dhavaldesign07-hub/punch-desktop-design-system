import { useState, useCallback } from 'react';
import styles from './NumberInput.module.css';

export type NumberInputVariant =
  | 'enabled'
  | 'disabled'
  | 'hover'
  | 'withoutSteppers'
  | 'scalperMini'
  | 'static'
  | 'protection';

export interface NumberInputProps {
  value: number;
  onChange?: (value: number) => void;
  variant?: NumberInputVariant;
  label?: string;
  stepperValues?: number[];
  min?: number;
  max?: number;
  step?: number;
}

export function NumberInput({
  value,
  onChange,
  variant = 'enabled',
  label,
  stepperValues = [5, 10, 15],
  min = 0,
  max = Infinity,
  step = 1,
}: NumberInputProps) {
  const [activeChip, setActiveChip] = useState<number | null>(null);
  const isDisabled = variant === 'disabled';
  const showSteppers = variant !== 'withoutSteppers' && variant !== 'scalperMini' && variant !== 'static' && variant !== 'disabled';
  const isMini = variant === 'scalperMini';
  const isStatic = variant === 'static';

  const handleDecrement = useCallback(() => {
    if (isDisabled || !onChange) return;
    const next = value - step;
    if (next >= min) onChange(next);
  }, [value, step, min, isDisabled, onChange]);

  const handleIncrement = useCallback(() => {
    if (isDisabled || !onChange) return;
    const next = value + step;
    if (next <= max) onChange(next);
  }, [value, step, max, isDisabled, onChange]);

  const handleChipClick = useCallback(
    (chipValue: number) => {
      if (isDisabled || !onChange) return;
      setActiveChip(chipValue);
      onChange(chipValue);
    },
    [isDisabled, onChange],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;
      const parsed = parseInt(e.target.value, 10);
      if (!isNaN(parsed) && parsed >= min && parsed <= max) {
        onChange(parsed);
      }
    },
    [onChange, min, max],
  );

  if (isStatic) {
    return (
      <div className={styles.wrapper}>
        <span className={styles.label}>{label || 'Market'}</span>
      </div>
    );
  }

  return (
    <div
      className={`${styles.wrapper} ${isMini ? styles.wrapperMini : ''} ${isDisabled ? styles.disabled : ''}`}
    >
      {(variant === 'hover' || variant === 'protection') && label && (
        <span className={styles.label}>{label}</span>
      )}
      <div className={styles.inputRow}>
        <button
          className={styles.stepperBtn}
          onClick={handleDecrement}
          disabled={isDisabled || value <= min}
          type="button"
          aria-label="Decrease value"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <input
          className={styles.qtyField}
          type="number"
          value={value}
          onChange={handleInputChange}
          disabled={isDisabled}
          min={min}
          max={max === Infinity ? undefined : max}
        />
        <button
          className={styles.stepperBtn}
          onClick={handleIncrement}
          disabled={isDisabled || value >= max}
          type="button"
          aria-label="Increase value"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3V9M3 6H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {showSteppers && (
        <div className={styles.stepperChips}>
          {stepperValues.map((sv) => (
            <button
              key={sv}
              className={`${styles.chip} ${activeChip === sv ? styles.chipActive : ''}`}
              onClick={() => handleChipClick(sv)}
              type="button"
            >
              {sv}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
