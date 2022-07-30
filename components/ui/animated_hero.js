import { AnimatePresence, motion } from 'framer-motion';

export const AnimationType = {
  DEFAULT: {
    start: { opacity: 0 },
    finish: { opacity: 1 }
  },
  VERTICAL: (delay = 0) => ({
    start: {
      opacity: 0,
      y: -100,
      transition: {
        ease: 'easeOut',
        duration: 0.5
      }
    },
    finish: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        ease: 'easeOut',
        duration: 0.75
      }
    }
  }),
  HORIZONTAL: (delay = 0) => ({
    start: {
      opacity: 0,
      x: '-100vw',
      transition: {
        ease: 'easeOut',
        duration: 0.5
      }
    },
    finish: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        type: 'spring',
        stiffness: 200,
        duration: 0.75,
        staggerChildren: 0.5
      }
    }
  }),
  ROTATE: (delay = 0) => ({
    start: {
      opacity: 0,
      rotate: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.5
      }
    },
    finish: {
      opacity: 1,
      rotate: 360,
      transition: {
        delay: delay,
        type: 'spring',
        stiffness: 150
      }
    }
  })
};

const AnimatedHero = ({ children, type, style }) => {
  type = type ?? AnimationType.DEFAULT;

  return (
    <AnimatePresence>
      <motion.div
        style={style}
        initial="start"
        animate="finish"
        exit={{ opacity: 0 }}
        variants={type}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedHero;
