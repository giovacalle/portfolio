import { Container } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container
      textAlign="center"
      opacity={0.4}
      fontSize="sm"
      py="50px">
      &copy; {new Date().getFullYear()} Giovanni Callegari. All Rights Reserved.
    </Container>
  );
};

export default Footer;
