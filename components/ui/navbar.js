import NextLink from 'next/link';
import {
  Box,
  Flex,
  Heading,
  Link,
  HStack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import ThemeButton from './theme-button';

const NavLink = props => {
  const { href, path, children } = props;

  const active = path === href;

  const activeColor = useColorModeValue('orange', 'green');
  const activeBg = useColorModeValue('green', 'orange');

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        borderRadius="10"
        bg={active && activeBg}
        color={active && activeColor}
        p="2"
        {...props}>
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = props => {
  const { path } = props;

  const bgActiveMenuListItem = useColorModeValue('orange', 'green');

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      width="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      backdropFilter="blur(10px)"
      shadow="md"
      zIndex="2"
      {...props}>
      <Flex
        maxW="container.md"
        wrap="wrap"
        alignItems="center"
        justify="space-between"
        mx="auto"
        p="1">
        <Flex alignItems="center" ml="1" mr="5">
          <Link href="/" path={path}>
            <Heading as="h2" letterSpacing="tighter">
              Gc
            </Heading>
          </Link>
        </Flex>
        <Flex alignItems="center" gap={6}>
          <HStack
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            spacing={6}>
            <NavLink href="/" path={path}>
              Main
            </NavLink>
            <NavLink href="/projects" path={path}>
              Projects
            </NavLink>
            <NavLink href="/contacts" path={path}>
              Contacts
            </NavLink>
          </HStack>

          <ThemeButton />

          <Box display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="mobile-navbar">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                size="lg"
                aria-label="Navigation"
              />
              <MenuList bg={useColorModeValue('gray.200', 'gray.600')}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link} bg={path == '/' && bgActiveMenuListItem}>
                    Main
                  </MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link} bg={path == '/projects' && bgActiveMenuListItem}>
                    Projects
                  </MenuItem>
                </NextLink>
                <NextLink href="/contacts" passHref>
                  <MenuItem as={Link} bg={path == '/contacts' && bgActiveMenuListItem}>
                    Contacts
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
