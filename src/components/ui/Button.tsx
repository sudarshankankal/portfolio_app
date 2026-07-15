import { motion } from 'motion/react';
import { memo, type ReactNode, type ElementType } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

/**
 * Animated button with Motion tap/hover effects.
 * Renders as <a> when href is provided, <button> otherwise.
 */
export const Button = memo(function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  target,
  rel,
}: ButtonProps) {
  const Tag = (href ? 'a' : 'button') as ElementType;

  const baseClasses =
    'inline-flex items-center gap-2 px-8 py-3.5 font-heading text-[0.85rem] font-semibold tracking-[1.5px] uppercase rounded-lg cursor-pointer transition-all duration-300 no-underline';

  const variantClasses =
    variant === 'primary'
      ? 'text-bg-primary bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple border-none'
      : 'text-accent-cyan bg-transparent border border-accent-cyan/30';

  return (
    <motion.div
      className="inline-block"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      <Tag
        href={href}
        type={!href ? type : undefined}
        disabled={disabled}
        onClick={onClick}
        target={target}
        rel={rel}
        className={`${baseClasses} ${variantClasses} ${
          variant === 'primary' ? 'hover:glow-cyan' : 'hover:bg-accent-cyan/[0.08] hover:border-accent-cyan hover:glow-cyan'
        } ${disabled ? 'opacity-70 cursor-not-allowed' : ''} ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
});
