const colors = {
  blue: { 50: '#EFF6FF', 100: '#DBEAFE', 700: '#1447E6', 800: '#193CB8' },
  green: '#005F5A',
  red: '#E7000B',
  yellow: '#FCD34D',
  white: '#FFFFFF',
  black: '#030712',
}
const overlayOpacityHEX = 45

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  plugins: [require('@tailwindcss/typography')],

  theme: {
    screens: { sm: '480px', md: '768px', lg: '1024px', xl: '1180px' },
    spacing: {
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
    },

    colors: {
      transparent: 'transparent',
      primary: colors.blue,
      white: colors.white,
      black: colors.black,
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      overlay: `${colors.black}${overlayOpacityHEX}`,
    },
    textColor: {
      primary: colors.black,
      invert: colors.white,
      highLight: colors.blue[800],
    },
    borderColor: {
      primary: colors.black,
      invert: colors.white,
      highLight: colors.blue[800],
      light: colors.blue[50],
    },

    borderWidth: { none: '0', sm: '1px', md: '2px', lg: '4px' },
    borderRadius: { sm: '8px', md: '16px', lg: '32px', full: '9999px' },
    dropShadow: { md: `4px 4px 0 ${colors.black}`, none: '0 0 0 #000' },

    fontFamily: { sans: ['var(--font-nunito)'] },
    fontWeight: { normal: '500', bold: '600', extraBold: '700' },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
    },

    transitionDuration: { DEFAULT: '150ms', 300: '300ms' },

    extend: {
      maxWidth: { screen: '1440px' },
      animation: {
        heartBeat: 'beat 0.9s linear infinite',
        highLight: 'highLight 9s linear 0.9s infinite',
        fromTop: 'fromTop 0.3s linear forwards',
        fromBottom: 'fromBottom 0.3s linear forwards',
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        highLight: {
          '0%': { transform: 'translateX(0)' },
          '45%': { transform: 'translateX(999px)' },
          '100%': { transform: 'translateX(999px)' },
        },
        fromTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
}
