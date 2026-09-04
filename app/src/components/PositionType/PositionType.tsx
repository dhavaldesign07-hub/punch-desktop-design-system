import styles from './PositionType.module.css';

export type PositionValue = 'Overnight' | 'MIS' | 'CNC';

export interface PositionTypeProps {
  value: PositionValue;
  hasDropdown?: boolean;
  onClick?: () => void;
}

export function PositionType({
  value,
  hasDropdown = true,
  onClick,
}: PositionTypeProps) {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={`${styles.wrapper} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      <span className={styles.label}>Position</span>
      <div className={styles.valueRow}>
        <span className={styles.value}>{value}</span>
        {hasDropdown && (
          <svg
            className={styles.chevron}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5L6 8L9 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </Component>
  );
}
