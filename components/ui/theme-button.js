import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs';

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}>
        <IconButton
          icon={useColorModeValue(<BsLightbulbOff />, <BsLightbulb />)}
          onClick={toggleColorMode}
          borderRadius='20'
          size="lg"
          title={useColorModeValue('Dark mode', 'Light mode')}
          aria-label="Toggle theme"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeButton;
