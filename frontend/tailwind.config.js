/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        surface: '#111827',
        surfaceHover: '#1F2937',
        brandBlue: '#1E40AF',
        brandBlueLight: '#2563EB',
        brandGold: '#D4AF37',
        brandGoldSoft: '#F5D76E',
        textPrimary: '#F9FAFB',
        textSecondary: '#9CA3AF',
        textMuted: '#6B7280',
        borderSubtle: '#1F2937',
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
