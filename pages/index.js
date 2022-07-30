import { Badge, Box, Container, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ParallaxCourses from '../components/ui/parallax_courses';

const containerAnimation = {
  start: {
    opacity: 0
  },
  finish: {
    opacity: 1,
    transition: {
      type: 'easeIn',
      duration: 0.8
    }
  }
};

const Home = () => {
  return (
    <Container>
      <motion.div
        variants={containerAnimation}
        initial="start"
        animate="finish">
        <Box>
          <Heading as="h5" fontSize="18px" mb="4" variant="separator">
            Bio
          </Heading>
          <Text as="p">
            Nice to meet you, I&apos;m Giovanni Callegari, 23, full-stack web
            developer based in Italy. Very passionate about IT since I was a
            child. I’ve got some experience in working with different techs,such
            as creating an automatic system to feed pets with Arduino. <br />
            Then I went to high school where I could totally focus on these
            subjects,in particular software development indeed.
          </Text>
          <Text as="p" mt="5">
            In <b> 2018 </b> I got my diploma as IT specialist at ITT E.Barsanti
            of Castelfranco Veneto, TV, Italy.
          </Text>
          <Text as="p" mt="5">
            From <b> 2018 to 2020 </b> I worked as full-stack web developer in
            Italian software house specialized in ERP to food factories.
          </Text>
          <Text as="p" mt="5">
            From <b> 2020 to 2022 </b> I joined a team of .NET developers in
            education software provider to Italian and Switzerland&apos;s
            private schools
          </Text>
          <Text as="p" mt="5">
            Moreover, during these years I&apos;ve joined a startup as a
            freelancer.
          </Text>
        </Box>
        <Box mt="10">
          <Heading
            as="h5"
            fontSize="18px"
            mb="4"
            width="max-content"
            variant="separator">
            About me
          </Heading>
          <Text as="p">
            Software development is also a passion of mine, indeed I like to
            follow new courses or build upon actual knowledge to master it.
            <br />
            Besides I spend some time completing personal projects, thanks to
            other developer friends too. <br />
            <br />
            In addition I really love sports, especially basketball and swimming
            which are my favorite since I was a child. For four years, though,
            I’ve been going to the gym.
          </Text>
        </Box>
        <Box mt="10">
          <Heading
            as="h5"
            fontSize="18px"
            mb="4"
            width="max-content"
            variant="separator">
            My aproach
          </Heading>
          <Text as="p">
            During coding sessions I am able to collaborate with other team
            workers, showing my best value. I believe in team working, to share
            ideas and then to create magic ! <br /> <br />I consider myself a <b>&apos;first principle thinker&apos;</b>: 
            my aproach to problem-solving, not only to coding stuff, is regulated by an
            analysis destructured of problems. In doing so I can focus on the
            smaller problems of the main one, so, I can channel my energy to
            solve the problem deeper, with more awareness of it.
          </Text>
        </Box>
        <Box mt="10">
          <Heading
            as="h5"
            fontSize="18px"
            mb="4"
            width="max-content"
            variant="separator">
            Courses
          </Heading>
          <Text as="p">
            During my short actual experience I&apos;ve used different stacks
            but I&apos;m focusing more on JS world, on <Badge fontSize="18">MERN STACK</Badge> specifically. 
            <br /> <br />
            Honestly, I was a bit hesitant to add this section. <br />I did not
            want to show off, but on the contrary, this section can give you an
            idea about courses I have attended.
          </Text>
          <ParallaxCourses />
        </Box>
      </motion.div>
    </Container>
  );
};

export default Home;
