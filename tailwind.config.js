/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  corePlugins: {
  },
  darkMode: 'media',
  mode: 'jit',
  theme: {
    colors: {
      // monospace
      black: '#000000',
      mono: {
        '0': '#fafafa',
        '1': '#eaeaea',
        '2': '#d7d7d7',
        '3': '#999999',
        '4': '#888888',
        '5': '#666666',
        '6': '#444444',
        '7': '#333333',
        '8': '#222222',
        '9': '#111111',
      },
      white: '#ffffff',
      
      // status
      error: {
        DEFAULT: '#e00',
        dark: '#c50000',
        light: '#ff1f1a',
        lighter: '#f7d4d6'
      },
      success: {
        DEFAULT: '#3291ff',
        dark: '#0070f3',
        light: '#3291ff',
      },
      warning: {
        DEFAULT: '#f5a623',
        dark: '#f49b0b',
        light: '#f7b955',
      },
    },

    container: {
      center: true,
      padding: '2rem',
    },

    fontFamily: {
      mono: [
        'Menlo',
        'Monaco',
        'Lucida Console',
        'Liberation Mono',
        'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono',
        'Courier New',
        'monospace'
      ],
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      headliners: [
        'Means Web',
        'Georgia',
        'Times',
        'Times New Roman',
        'serif'
      ]
    },

    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },

    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1260px',
      '2xl': '1620px',
    },

    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      transitionProperty: {
        text: 'color',
      },
    },
  },
}
