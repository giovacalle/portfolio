import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '../ui/navbar';
import Hero from '../ui/hero';
import Footer from '../ui/footer';
import { Fragment } from 'react';

const Layout = ({ children, router }) => {
  return (
    <Fragment>
      <Box as="main" minH="100vh">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Giovanni Callegari portfolio" />
          <meta name="theme-color" content="#000000" />
          <title>GC portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Navbar path={router.asPath} />
        <Container maxW="container.md" my="20">
          <Hero />
          {children}
        </Container>
        <Footer />  
      </Box>
    </Fragment>
  );
};

export default Layout;
