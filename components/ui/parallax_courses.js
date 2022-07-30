import {
  Box,
  Container,
  Flex,
  Img,
  Link,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { BiLinkExternal } from 'react-icons/bi';

const SCROLLRATIO = 0.4;
const SCROLLSTEPPER = 0.01;
const HEIGHTCARD = 300;
const COURSES = [
  {
    id: 'cybersecurity',
    show: true,
    name: 'Cybersecurity',
    source: 'Enrico Zimuel course',
    link: 'https://www.zimuel.it/',
    date: '2022',
    certificate: '/cybersecurity.png',
    certificate_link: '/cybersecurity.pdf',
    img: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'project_management',
    show: true,
    name: 'Project management',
    source: 'Choralia course',
    link: 'https://www.choralia.com/en/choralia-home-2/',
    date: '2022',
    certificate: '/project_management.png',
    certificate_link: '/project_management.pdf',
    img: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuYWdlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'react.js',
    show: true,
    name: 'React.js',
    source: 'Udemy',
    link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux',
    date: '2022',
    certificate: '/certificate_react_js.png',
    certificate_link: '',
    img: '/react_js.svg'
  },
  {
    id: 'node.js',
    show: true,
    name: 'Node.js',
    source: 'Udemy',
    link: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2',
    date: 'ongoing',
    certificate: '',
    certificate_link: '',
    img: '/node_js.svg'
  },
  {
    id: 'mongodb',
    show: true,
    name: 'MongoDB',
    source: 'Udemy',
    link: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide/',
    date: 'ongoing',
    certificate: '',
    certificate_link: '',
    img: '/mongodb.svg'
  },
  {
    id: 'flutter',
    show: false,
    name: 'Flutter',
    source: 'Udemy',
    link: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/',
    date: 'ongoing',
    certificate: '',
    certificate_link: '',
    img: '/flutter.svg'
  }
];

const Course = ({ id, index, img, name, date }) => {
  const { scrollYProgress } = useViewportScroll();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const inputRange = [index * SCROLLSTEPPER + SCROLLRATIO, 1];
  const outputRange = [0, HEIGHTCARD * index + 10];
  const transformY = useTransform(scrollYProgress, inputRange, outputRange);

  return (
    <>
      <ModalCourse
        onClose={onClose}
        isOpen={isOpen}
        size="lg"
        scrollBehavior="inside"
        isCentered
        idCourse={id}
      />
      <motion.div
        onClick={() => onOpen()}
        style={{
          position: 'absolute',
          top: 20 * index + 15,
          width: '100%',
          maxWidth: '350px',
          height: HEIGHTCARD,
          scale: 0.05 * index + 1,
          y: transformY
        }}>
        <Container
          bg="transparent"
          backdropFilter="blur(10px)"
          p="2"
          shadow="0 0 5px 0 rgb(164 164 164 / 80%)"
          borderRadius="10"
          cursor="pointer">          
          <Box px="1" pb="3">
            <Link>
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="space-between">
                <Heading as="h4" fontSize="20px" fontFamily="Montserrat">
                  {name}
                </Heading>
                <Heading as="h4" fontSize="20px" fontFamily="Montserrat">
                  {date}
                </Heading>
              </Flex>
            </Link>
          </Box>
          <Img
            src={img}
            height="200px"
            width="100%"
            objectFit="contain"
          />
        </Container>
      </motion.div>
    </>
  );
};

const ModalCourse = ({ idCourse, ...rest }) => {
  const course = COURSES.find(item => item.id === idCourse);

  if (course === undefined) return;

  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Course details
          <Heading
            as="h4"
            fontSize="18px"
            opacity=".7"
            fontFamily="Montserrat"
            mt="2">
            {course.name}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" flexWrap="wrap" pb="3">
            <Link href={course.link} isExternal>
              <Heading as="h4" fontSize="20px" fontFamily="Montserrat">
                <Flex justifyContent="space-between" alignItems="center">
                  <span>{course.source} source</span>
                  <BiLinkExternal />
                </Flex>
              </Heading>
            </Link>
            <Link target="_blank" href={course.certificate_link == '' ? course.certificate : course.certificate_link}>
              <Img
                src={course.certificate}
                mt="8"
                borderRadius="5"
                objectFit="contain"
              />
            </Link>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const ParallaxCourses = () => {
  const coursesFiltered = COURSES.filter(item => item.show).reverse();

  return (
    <Box
      pos="relative"
      display="flex"
      justifyContent="center"
      height={HEIGHTCARD * coursesFiltered.length}>
      {coursesFiltered.reverse().map((course, index) => {
        return (
          <Course
            key={course.id}
            id={course.id}
            index={index}
            img={course.img}
            name={course.name}
            date={course.date}
          />
        );
      })}
    </Box>
  );
};

export default ParallaxCourses;
