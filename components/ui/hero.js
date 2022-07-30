import { Box, Flex, Heading, Stack, Img } from '@chakra-ui/react';
import AnimatedHero, { AnimationType } from './animated_hero';
import RevealText from './reveal_text';

const Hero = () => {
  return (
    <Flex
      mt={{ base: '100px', md: '120px' }}
      mb={20}
      px={6}
      alignItems={{ base: 'center', md: 'space-between' }}
      direction={{ base: 'column-reverse', sm: 'row' }}>
      <Stack direction="column" spacing="20px">
        <AnimatedHero type={AnimationType.VERTICAL()}>
          <Heading as="h4" color="green" fontWeight="400">
            Hello,
          </Heading>
        </AnimatedHero>
        <Box pb={6}>
          <AnimatedHero type={AnimationType.HORIZONTAL(0.7)}>
            <Heading as="h4" color="red" fontWeight="700">
              I am Giovanni,
            </Heading>
            <Heading as="h4" color="red" fontWeight="700">
              web developer
            </Heading>
          </AnimatedHero>
        </Box>
        <Box>
          <Heading
            as="h4"
            color="orange"
            fontSize="20px"
            fontWeight="600"
            fontFamily="Montserrat">
            <RevealText
              delay={1.2}
              words={[
                'Insatiably',
                'curious,',
                'meanwhile',
                'I',
                'enjoy',
                'developing',
                'stuff',
                '🤓'
              ]}
            />
          </Heading>
        </Box>
      </Stack>
      <AnimatedHero type={AnimationType.ROTATE()}>
        <Img
          src="/profile-photo.jpeg"
          width="200px"
          borderRadius="full"
          shadow="0px 1px 20px 2px #818181"
          alt="profile photo"
        />
      </AnimatedHero>
    </Flex>
  );
};

export default Hero;
