module.exports = {
  theme: {
    screens:{
      'sm': {'min': '320px', 'max': '767px' },
      'md': {'min': '768px', 'max': '1024px'},
      'lg': {'min': '1025px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max':'2040px'},
    },
    extend: {
      spacing: {
        '72': '39rem'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  }
}
