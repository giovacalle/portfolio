import {
  Box,
  Heading,
  Img,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  List,
  ListItem,
  Link,
  Badge
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsCardChecklist, BsPersonCircle } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { GiScrew } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const PROJECTS = [
  {
    id: 1,
    title: 'ViteriaOnline',
    description: 
      `ViteriaOnline is like an hybrid between B2B and B2C. This web-app offers a large catalogue of screws for retail. It's mainly designed for companies which are looking for
      large supplies.`,
    icon: <GiScrew fontSize="70" />,
    thumbnails: ['/viteriaonline.png'],
    github: '',
    link: 'https://www.viteriaonline.it',
    stack: ['PHP', 'PureJS', 'HTML Components', 'Bootstrap (CSS)']
  },
  {
    id: 2,
    title: 'Food delivery menu',
    description: 
      `This is a project that I created to get to know better React.js. The website emulates a food delivery menu, with a short list of different silly meals, where the user can add/remove quantity
      and then complete the order in the cart. This exercise helped me to start interactions with Firebase as well.`,
    icon: <MdOutlineRestaurantMenu fontSize="70" />,
    thumbnails: ['/food_delivery_app.png'],
    github: 'https://github.com/giovacalle/food-delivery-app',
    link: 'https://6251ac985c2ff52d27ad5644--astounding-cat-46c68d.netlify.app/',
    stack: ['React.js', 'Firebase', 'CSS']
  },
  {
    id: 3,
    title: 'To do list',
    description: `Simple web-app to write down your activities with minimalist style. This website helped me master React Context API and some concepts about WPA. It is in its beta status, i've planned to add
    sync feature over more devices.`,
    icon: <BsCardChecklist fontSize="70" />,
    thumbnails: ['/to_do_app.png'],
    github: 'https://github.com/giovacalle/todo-app',
    link: 'https://zippy-valkyrie-420f0f.netlify.app/',
    stack: ['React.js', 'React bootstrap']
  },
  {
    id: 4,
    title: 'This portfolio',
    description: `It's this website you're visiting. I think is a good repo to show the world something about my works and some infos to get to know me.`,
    icon: <BsPersonCircle fontSize="70" />,
    thumbnails: ['/this_portfolio.png'],
    github: 'https://github.com/giovacalle/portfolio',
    link: 'https://www.giovacalle.dev',
    stack: ['Next.js', 'Chakra UI']
  }
];
const cardContainerAnimation = {
  start: {
    y: -100
  },
  finish: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.7,
      duration: 0.8
    }
  }
};

const CardProject = ({ id, title, icon }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <ModalProject
        onClose={onClose}
        isOpen={isOpen}
        size="lg"
        scrollBehavior="inside"
        isCentered
        idProject={id}
      />
      <motion.div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        variants={cardContainerAnimation}
        initial="start"
        animate="finish"
        onClick={() => onOpen()}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}>
        <Heading as="h5" fontSize="24" variant="title-project">
          {title}
        </Heading>
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: isHover ? '95%' : '90%',
            height: '200px',
            background: 'orange',
            borderRadius: 10,
            zIndex: '-1'
          }}>
          {icon}
        </motion.div>
      </motion.div>
    </>
  );
};

const ModalProject = ({ idProject, ...rest }) => {
  const project = PROJECTS.find(item => item.id === idProject);

  if (project === undefined) return;

  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Project details
          <Heading
            as="h4"
            fontSize="18px"
            opacity=".7"
            fontFamily="Montserrat"
            mt="2">
            {project.title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" flexWrap="wrap" pb="3">
            <Text as="p" mb="10">
              {project.description}
            </Text>
            <Box mb="10">
              <List fontSize="20">
                <ListItem
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap="5"
                  mb="5">
                  <BiLink />
                  <Link href={project.link} isExternal noOfLines="1">
                    {project.link}
                  </Link>
                </ListItem>
                {project?.github != '' && (
                  <ListItem
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap="5"
                    mb="5">
                    <AiFillGithub />
                    <Link href={project.github} isExternal noOfLines="1">
                      {project.github}
                    </Link>
                  </ListItem>
                )}
                <ListItem
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap="5"
                  mb="3">
                  <Badge>STACK</Badge>
                  <Text as="p" fontSize='18'>{project.stack.join(', ')}</Text>
                </ListItem>
              </List>
            </Box>
            <Img src={project.thumbnails[0]} maxHeight="400px" />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const AnimatedProjects = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      alignItems="center"
      gap="50px 10px">
      {PROJECTS.map((project, index) => {
        return (
          <CardProject
            key={index}
            id={project.id}
            title={project.title}
            icon={project.icon}
          />
        );
      })}
    </Box>
  );
};

export default AnimatedProjects;
