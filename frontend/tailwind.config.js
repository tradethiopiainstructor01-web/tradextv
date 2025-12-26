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
        bg: '#ffffff',
        surface: '#F9FAFB',
        surfaceHover: '#E5E7EB',
        brandBlue: '#1E3A8A',
        brandBlueLight: '#2563EB',
        brandGold: '#C9A227',
        brandGoldSoft: '#F5D76E',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        textMuted: '#9CA3AF',
        borderSubtle: '#E5E7EB',
        danger: '#DC2626',
        success: '#16A34A',
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
