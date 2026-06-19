'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { CSSProperties, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 0 30px rgba(124,58,237,0.4)',
  },
  secondary: {
    background: 'linear-gradient(135deg, #1A1A2E 0%, #252541 100%)',
    color: '#F5F3FF',
    border: '1px solid rgba(124,58,237,0.3)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  outline: {
    background: 'transparent',
    color: '#c4b5fd',
    border: '2px solid rgba(124,58,237,0.5)',
    boxShadow: 'none',
  },
  ghost: {
    background: 'transparent',
    color: '#c4b5fd',
    border: 'none',
    boxShadow: 'none',
  },
  glass: {
    background: 'rgba(124,58,237,0.1)',
    color: '#F5F3FF',
    border: '1px solid rgba(124,58,237,0.3)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  },
};

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: {
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '8px',
  },
  md: {
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '10px',
  },
  lg: {
    padding: '16px 32px',
    fontSize: '18px',
    borderRadius: '12px',
  },
  xl: {
    padding: '20px 40px',
    fontSize: '20px',
    borderRadius: '14px',
  },
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  style,
  ...props
}: ButtonProps) => {
  const baseStyles = {
    fontWeight: 600,
    cursor: 'pointer' as const,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    gap: '8px',
    width: fullWidth ? '100%' : 'auto',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    fontFamily: 'inherit',
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  const hoverAnimation = {
    scale: variant === 'ghost' ? 1 : 1.02,
    boxShadow: variant === 'primary' ? '0 0 40px rgba(124,58,237,0.6)' : 
               variant === 'glass' ? '0 8px 32px rgba(124,58,237,0.3)' :
               variant === 'secondary' ? '0 8px 24px rgba(0,0,0,0.4)' : undefined,
  };

  const tapAnimation = {
    scale: 0.98,
  };

  return (
    <motion.button
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      style={baseStyles}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
      
      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '100%', opacity: 0.5 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            pointerEvents: 'none',
          }}
        />
      )}
    </motion.button>
  );
};
