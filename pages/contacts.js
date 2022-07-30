import { Container, Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import StayInTouch from '../components/ui/stay_in_touch';

const containerAnimation = {
  start: {
    opacity: 0,
    x: -100,
  },
  finish: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.7,
      duration: 0.8
    }
  }
};

const Contacts = () => {
  return (
    <Container>
      <motion.div
        variants={containerAnimation}
        initial="start"
        animate="finish">
        <Box>
          <Heading
            as="h5"
            fontSize="18px"
            mb="4"
            width="max-content"
            variant="separator">
            Stay in touch
          </Heading>
          <Text as="p">
            If you are looking for someone who loves coding and who loves sharing knowledge, 
            you can find me on the web at:
          </Text>
        </Box>
        <StayInTouch />
      </motion.div>
    </Container>
  );
};

export default Contacts;
