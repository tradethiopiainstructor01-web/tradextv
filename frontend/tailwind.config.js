/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg: '#FFFFFF',
        section: '#F4F6F8',
        surface: '#FFFFFF',
        surfaceHover: '#F0F2F4',
        brandBlue: '#0E2A47',
        brandBlueLight: '#123A5B',
        brandGold: '#D4AF37',
        brandGoldSoft: '#F6E7A5',
        textPrimary: '#1A1A1A',
        textSecondary: '#5F6368',
        textMuted: '#7C8694',
        borderSubtle: '#E0E4EA',
        live: '#C7372F',
        positive: '#1E8E3E',
        negative: '#D93025',
      },
      fontFamily: {
        heading: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.35)',
        hover: '0 20px 40px rgba(0,0,0,.45)',
        glowGold: '0 0 20px rgba(212,175,55,.35)',
        glowBlue: '0 0 20px rgba(37,99,235,.35)',
      },
      borderRadius: {
        xl: '14px',
        xxl: '18px',
      },
      spacing: {
        section: '6rem',
        card: '1.25rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        103: '1.03',
      },
    },
  },
  plugins: [],
};
