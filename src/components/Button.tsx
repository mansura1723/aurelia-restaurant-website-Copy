import type { ReactNode } from 'react';
import type { PageRoute } from '../data/restaurantData';

interface ActionButtonProps {
  children: ReactNode;
  variant?: 'gold' | 'navy' | 'ivoryOutline' | 'navyOutline';
  onClick?: () => void;
  href?: PageRoute;
  onNavigate?: (path: PageRoute) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const VARIANT_CLASSES: Record<NonNullable<ActionButtonProps['variant']>, string> = {
  gold: 'bg-[#B99A62] text-[#101C2C] hover:bg-[#C8AA74] border border-[#B99A62]',
  navy: 'bg-[#101C2C] text-[#F8F6F0] hover:bg-[#1B2C42] border border-[#101C2C]',
  ivoryOutline:
    'bg-transparent text-[#F8F6F0] border border-[#F8F6F0]/70 hover:bg-[#F8F6F0] hover:text-[#101C2C]',
  navyOutline:
    'bg-transparent text-[#101C2C] border border-[#101C2C]/35 hover:bg-[#101C2C] hover:text-[#F8F6F0]',
};

export function ActionButton({
  children,
  variant = 'gold',
  onClick,
  href,
  onNavigate,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
}: ActionButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A62] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${VARIANT_CLASSES[variant]} ${className}`;

  if (href && onNavigate) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(href);
        }}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
