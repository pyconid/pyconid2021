module.exports = {
  mode: 'jit',
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FCE8DC',
          200: '#FACCBB',
          300: '#F2A696',
          400: '#E58278',
          500: '#D54F4E',
          600: '#B73942',
          700: '#99273A',
          800: '#7B1831',
          900: '#660E2C'
        },
        success: {
          100: '#E2F0F6',
          200: '#C7E0ED',
          300: '#98B7C9',
          400: '#678094',
          500: '#2E3E4D',
          600: '#213042',
          700: '#172437',
          800: '#0E192C',
          900: '#081124'
        },
        info: {
          100: '#CBF0FE',
          200: '#98DDFE',
          300: '#65C3FD',
          400: '#3EAAFB',
          500: '#0081F9',
          600: '#0063D6',
          700: '#004AB3',
          800: '#003490',
          900: '#002577'
        },
        warning: {
          100: '#FBF5C9',
          200: '#F7EA95',
          300: '#E7D35E',
          400: '#CFB636',
          500: '#AF9003',
          600: '#967802',
          700: '#7D6201',
          800: '#654D00',
          900: '#533E00'
        },
        danger: {
          100: '#FDE6D5',
          200: '#FBC8AC',
          300: '#F4A081',
          400: '#EA7A60',
          500: '#DD4230',
          600: '#BE2623',
          700: '#9F181F',
          800: '#800F1E',
          900: '#6A091E'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
