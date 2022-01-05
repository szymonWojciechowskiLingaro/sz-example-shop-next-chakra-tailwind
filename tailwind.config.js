module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        'brand-light': 'var(--brand-light)',
        brand: 'var(--brand)',
        'brand-dark': 'var(--brand-dark)',
        'cta-light': 'var(--cta-light)',
        cta: 'var(--cta)',
        'cta-dark': 'var(--cta-dark)',
        'warning-light': 'var(--warning-light)',
        warning: 'var(--warning)',
        'warning-dark': 'var(--warning-dark)',
        'success-light': 'var(--success-light)',
        success: 'var(--success)',
        'success-dark': 'var(--success-dark)',
        'danger-light': 'var(--danger-light)',
        danger: 'var(--danger)',
        'danger-dark': 'var(--danger-dark)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        white: 'var(--white)',
        'gray-lightest': 'var(--gray-lightest)',
        'gray-lighter': 'var(--gray-lighter)',
        'gray-light': 'var(--gray-light)',
        gray: 'var(--gray)',
        'gray-dark': 'var(--gray-dark)',
        'gray-darker': 'var(--gray-darker)',
        'gray-darkest': 'var(--gray-darkest)',
        black: 'var(--black)',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        brand: 'var(--text-brand)',
        cta: 'var(--text-cta)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--gray-lighter)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
    },
  },
};
