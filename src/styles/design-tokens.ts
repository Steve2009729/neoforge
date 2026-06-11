// ============================================
// NEOFORGE DESIGN TOKENS
// All colors, spacing, typography, animations
// ============================================

export const colors = {
  // Primary Violet Theme
  primary: {
    50: '#F5F3FF',    // lightest
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',   // mid violet
    600: '#7C3AED',   // main primary
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#3F0F8F',   // darkest
  },

  // Background & Surface
  background: '#0D0D14',     // almost black with violet tint
  surface: '#1A1A2E',        // dark navy-violet for cards
  surface_hover: '#252541',  // slightly lighter on hover
  border: '#2D2D47',         // subtle borders

  // Text
  text: {
    primary: '#F5F3FF',      // soft white
    secondary: '#D1D5DB',    // gray
    tertiary: '#9CA3AF',     // darker gray
    muted: '#6B7280',        // very dark gray
  },

  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Gradients
  gradient: {
    primary: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
    violet_to_pink: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
    dark_to_violet: 'linear-gradient(180deg, #0D0D14 0%, #1A1A2E 100%)',
  },
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
};

export const typography = {
  // Font sizes
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Font families
  fontFamily: {
    sans: 'system-ui, -apple-system, sans-serif',
    mono: '"Fira Code", "Courier New", monospace',
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
  // Violet glow
  glow: '0 0 20px rgba(124, 58, 237, 0.3)',
  glow_lg: '0 0 40px rgba(124, 58, 237, 0.5)',
};

export const borderRadius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

export const animations = {
  // Durations
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },

  // Easing functions
  easing: {
    linear: 'linear',
    ease_in: 'cubic-bezier(0.4, 0, 1, 1)',
    ease_out: 'cubic-bezier(0, 0, 0.2, 1)',
    ease_in_out: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
