import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('lightyellow', 'gray.800')(props)
    }
  })
};

const components = {
  Link: {
    baseStyle: props => ({
      color: mode('#046865', '#FFC700')(props),
      fontSize: '18',
      fontWeight: 'bold',
      textUnderlineOffset: 5
    }),
    variants: {
      with_icon: {
        color: 'initial'
      }
    }
  },
  Heading: {
    variants: {
      separator: props => ({
        width: 'max-content',
        color: mode('violet', 'white')(props),
        borderBottom: `1px solid ${mode('red', 'orange')(props)}`
      }),
      'title-project': props => ({
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        textAlign: 'center',
        color: mode('#046865', '#FFC700')(props),
        backgroundColor: mode('#FFC700', '#046865')(props),
        shadow: "0 0 6px 3px rgb(164 164 164 / 80%)"
      }),
    }
  },
  Box: {
    variants: {
      project: props => ({
        shadow: '0 0 6px 3px rgb(164 164 164 / 80%)',
        color: mode('#046865', '#FFC700')(props),
        borderBottom: `1px solid ${mode('red', 'orange')(props)}`
      })
    }
  }
};

const fonts = {
  body: 'Montserrat Alternates, sans-serif',
  heading: 'Montserrat Alternates, sans-serif',
  other: 'Montserrat, sans-serif'
};

const colors = {
  green: '#046865',
  darkgreen: '#21A0A0',
  orange: '#FFC700',
  red: '#E53D00',
  lightyellow: '#FCFFF7'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
