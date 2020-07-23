/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens:{
      'sm': {'min': '320px', 'max': '767px' },
      'md': {'min': '768px', 'max': '1024px'},
      'lg': {'min': '1025px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max':'2040px'},
    }
  },
  variants: {},
  plugins: []
}
