import { Box, Flex, Link } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const FONTSIZEICON = 72;

const StayInTouch = () => {
  return (
    <Box mt="10">
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="https://www.linkedin.com/in/giovanni-callegari-4a11571b6" variant='with_icon' isExternal>
          <Box position="relative" width="50px" height="50px" bg="white">
            <AiFillLinkedin
              fontSize={FONTSIZEICON}
              title="linkedin"
              fill="#0e76a8"
              style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px'
              }}
            />
          </Box>
        </Link>
        <Link href="https://github.com/giovacalle" variant='with_icon' isExternal>
          <AiFillGithub fontSize={FONTSIZEICON} title="github" />
        </Link>
        <Link href="mailto:giovacalle.dev@gmail.com" variant='with_icon' isExternal>
          <AiOutlineMail fontSize={FONTSIZEICON} title="email" />
        </Link>
      </Flex>
    </Box>
  );
};

export default StayInTouch;
