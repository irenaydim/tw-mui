/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Montserrat'],
      body: ['Montserrat'],
    },
    extend: {
      // https://mui.com/material-ui/customization/palette/
      // https://m2.material.io/resources/color/#!/?view.left=1&view.right=0&primary.color=FFAB91
      colors: {
        primary: {
          light: '#c3e9e0',
          main: '#9cc4bb',
          dark: '#64877f'
        },
        secondary: {
          light: '#ffffff',
          main: '#e8ded4',
          dark: '#b6aca3'
        },
        success: {
          light: '#81c784',
          main: '#66bb6a',
          dark: '#388e3c'
        },
        error: {
          light: '#e57373',
          main: '#f44336',
          dark: '#d32f2f'
        },
        warning: {
          light: '#ffb74d',
          main: '#ffa726',
          dark: '#f57c00'
        },
        info: {
          light: '#4fc3f7',
          main: '#29b6f6',
          dark: '#0288d1'
        }
      },


      fontSize: {
        'button': ['16px', {
          lineHeight: '13px',
          letterSpacing: '0.6px',
          fontWeight: '400',
        }],
        'chip': ['15px', {
          lineHeight: '13px',
          letterSpacing: '0.6px',
          fontWeight: '400',
        }],
      },
      
      animation: {
        loader: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },

      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(0.5)'
          }
        },
      },
    },
  },
  plugins: [],
}
