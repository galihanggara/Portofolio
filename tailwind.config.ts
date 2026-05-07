import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface-container-highest': '#353534',
        'inverse-primary': '#735c00',
        'secondary-fixed': '#e5e2e1',
        'outline-variant': '#4d4635',
        'on-secondary-fixed-variant': '#474746',
        'on-secondary': '#313030',
        'on-primary-fixed': '#241a00',
        'on-error-container': '#ffdad6',
        'on-secondary-fixed': '#1c1b1b',
        'primary-fixed': '#ffe088',
        'on-surface-variant': '#d0c5af',
        outline: '#99907c',
        background: '#131313',
        'surface-variant': '#353534',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-high': '#2a2a2a',
        'on-surface': '#e5e2e1',
        'secondary-fixed-dim': '#c8c6c5',
        'on-background': '#e5e2e1',
        'inverse-on-surface': '#313030',
        'secondary-container': '#474746',
        error: '#ffb4ab',
        'surface-bright': '#3a3939',
        'tertiary-fixed': '#e2e2e2',
        'on-tertiary-fixed-variant': '#454747',
        'inverse-surface': '#e5e2e1',
        'on-tertiary-fixed': '#1a1c1c',
        tertiary: '#cecece',
        'surface-container-low': '#1c1b1b',
        'tertiary-fixed-dim': '#c6c6c7',
        'on-tertiary': '#2f3131',
        'on-primary-fixed-variant': '#574500',
        'error-container': '#93000a',
        surface: '#131313',
        primary: '#f2ca50',
        'surface-dim': '#131313',
        'on-tertiary-container': '#444546',
        'on-primary': '#3c2f00',
        'on-error': '#690005',
        'primary-container': '#d4af37',
        'surface-container': '#201f1f',
        'primary-fixed-dim': '#e9c349',
        secondary: '#c8c6c5',
        'surface-tint': '#e9c349',
        'tertiary-container': '#b2b3b3',
        'on-primary-container': '#554300',
        'on-secondary-container': '#b7b5b4'
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem'
      },
      spacing: {
        'section-gap': '160px',
        'grid-gutter': '24px',
        'stack-sm': '8px',
        'page-margin': '5vw',
        'stack-md': '24px',
        'stack-lg': '48px'
      },
      fontFamily: {
        'headline-xl': ['Noto Serif', 'serif'],
        'body-md': ['Inter', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'label-sm': ['Inter', 'sans-serif'],
        'headline-md': ['Noto Serif', 'serif'],
        'headline-lg': ['Noto Serif', 'serif'],
        'display-lg': ['Noto Serif', 'serif'],
        'label-lg': ['Inter', 'sans-serif']
      },
      fontSize: {
        'headline-xl': ['60px', { lineHeight: '1.2', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '500' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '500' }],
        'headline-lg': ['48px', { lineHeight: '1.2', fontWeight: '400' }],
        'display-lg': ['84px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '1.2', letterSpacing: '0.1em', fontWeight: '600' }]
      }
    }
  },
  plugins: []
};

export default config;
