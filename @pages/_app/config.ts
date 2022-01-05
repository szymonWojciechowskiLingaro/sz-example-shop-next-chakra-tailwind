import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'var(--brand)',
      },
    },
    Button: { baseStyle: { _focus: { boxShadow: '' } } },
    AccordionItem: {
      baseStyle: { _focus: { boxShadow: '' } },
      defaultProps: {
        focusBorderColor: 'var(--brand)',
      },
    },
  },
  colors: {
    brand: {
      50: 'var(--brand-light)',
      100: 'var(--brand-light)',
      200: 'var(--brand-light)',
      300: 'var(--brand)',
      400: 'var(--brand)',
      500: 'var(--brand)',
      600: 'var(--brand-dark)',
      700: 'var(--brand-dark)',
      800: 'var(--brand-dark)',
      900: 'var(--brand-dark)',
    },
    cta: {
      50: 'var(--cta-light)',
      100: 'var(--cta-light)',
      200: 'var(--cta-light)',
      300: 'var(--cta)',
      400: 'var(--cta)',
      500: 'var(--cta)',
      600: 'var(--cta-dark)',
      700: 'var(--cta-dark)',
      800: 'var(--cta-dark)',
      900: 'var(--cta-dark)',
    },
  },
})
