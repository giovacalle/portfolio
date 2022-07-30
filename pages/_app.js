import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/index';
import Fonts from '../components/ui/fonts';
import Scrollbar from '../components/ui/scrollbar';

import theme from '../lib/theme'

const Portfolio = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Scrollbar />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default Portfolio;
