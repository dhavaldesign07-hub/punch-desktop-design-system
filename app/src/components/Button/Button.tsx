import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.css';

export type ButtonVariant = 'success' | 'error' | 'warning' | 'secondary';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Visual intent of the button */
  variant?: ButtonVariant;
  /** Icon rendered before the label */
  leftIcon?: ReactNode;
  /** Icon rendered after the label */
  rightIcon?: ReactNode;
  /** Button label */
  children: ReactNode;
}

/**
 * Primary CTA button. Source of truth: Figma "Punch Desktop Design System",
 * node 12764:14524 (CTAs component set).
 */
export function Button({
  variant = 'success',
  leftIcon,
  rightIcon,
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[styles.button, styles[variant], className].filter(Boolean).join(' ')}
      {...props}
    >
      {leftIcon && <span className={`${styles.icon} ${styles.iconLeft}`}>{leftIcon}</span>}
      <span className={styles.label}>{children}</span>
      {rightIcon && <span className={`${styles.icon} ${styles.iconRight}`}>{rightIcon}</span>}
    </button>
  );
}
