module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FFFFFF',
          secondary: '#F5F5F7',
          tertiary: '#EBEBEF',
        },
        text: {
          primary: '#171717',
          secondary: '#57534E',
          inverse: '#FFFFFF',
          accent: '#6D071A',
        },
        accent: {
          primary: '#6D071A',
          wine: '#800020',
          gold: '#D4AF37',
          warning: '#D4AF37',
          danger: '#FF3B30',
          success: '#00C853',
        },
        border: {
          default: '#E5E5E5',
          focus: '#111111',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '4px',
      },
    },
  },
  plugins: [],
}
