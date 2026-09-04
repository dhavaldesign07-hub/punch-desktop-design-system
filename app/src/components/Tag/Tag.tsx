import type { ReactNode } from 'react';
import styles from './Tag.module.css';

export interface TagProps {
  children: ReactNode;
  hasDropdown?: boolean;
  onClick?: () => void;
}

export function Tag({ children, hasDropdown = false, onClick }: TagProps) {
  const Component = onClick ? 'button' : 'span';

  return (
    <Component
      className={`${styles.tag} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      <span className={styles.label}>{children}</span>
      {hasDropdown && (
        <svg
          className={styles.chevron}
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 3L4 5L6 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </Component>
  );
}
