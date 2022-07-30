import { motion } from 'framer-motion';

const RevealText = ({ words, delay }) => {
  words = words ?? [];
  delay = delay ?? 0;

  const type = cnt => ({
    start: {
      opacity: 0,
      y: -100
    },
    finish: {
      opacity: 1,
      y: 0,
      transition: {
        delay: cnt * 0.1 + delay
      }
    }
  });

  return words.map((word, i) => {
    return (
      <motion.div
        key={i}
        style={{ display: 'inline-block' }}
        initial="start"
        animate="finish"
        variants={type(i)}>
        {word + (i !== words.length - 1 ? '\u00A0' : '')}
      </motion.div>
    );
  });
};

export default RevealText;