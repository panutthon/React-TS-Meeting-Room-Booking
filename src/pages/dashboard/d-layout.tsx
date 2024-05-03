import { ReactNode } from "react";
import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  Text,
  FlexProps,
  Stack,
  AvatarBadge,
} from "@chakra-ui/react";

import { FiHome, FiClipboard, FiLogOut } from "react-icons/fi";
import { IconType } from "react-icons";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavbarHeader from "../../components/NavbarHeader";
import dlayout from "../../styles/dlayout.module.css";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [ 
  { name: "Home", icon: FiHome, href: "/dashboard" },
  { name: "Report", icon: FiClipboard, href: "/dashboard/room" },
  { name: "Logout", icon: FiLogOut, href: "/login"  },
];

export default function DLayout() {
  const { isOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <NavbarHeader />
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const location = useLocation();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 250 }}
      pos="fixed"
      h="full"
      bgColor={"#1D262E"}
      textColor={"white"}
      {...rest}
    >
      <Flex h="55" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Stack direction="row" spacing={4} marginBottom={8} justify={"center"}>
        <Avatar
          boxSize="170px"
          name="Dan Abrahmov"
          src="https://scontent-kul2-1.xx.fbcdn.net/v/t39.30808-6/412697057_2059885154347437_4436885139192070924_n.jpg?_nc_cat=104&_nc_cb=99be929b-713f6db7&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QrH_xLgvJEQAb7j3SbL&_nc_ht=scontent-kul2-1.xx&oh=00_AfAfw0miHwH4mfn2oqtn6terLx1M7OWkHrnuXd3M10FZ9A&oe=66364145"
        >
          <AvatarBadge
            className={dlayout.avatarBadge}
            boxSize="40px"
            bg="green.500"
          />
        </Avatar>
      </Stack>
      <Text className={dlayout.textBadge}>ปณัฐฑรณ์ ชนาชน</Text>
      <Text
        fontSize="12px"
        textAlign="center"
        fontWeight="bold"
        color="#C1C1C1"
        marginBottom={8}
      >
        Admin
      </Text>

      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          href={link.href}
          active={location.pathname === link.href ? "menuActive" : ""}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  href: string;
  active?: string;
}
const NavItem = ({ icon, children, href, active, ...rest }: NavItemProps) => {
  return (
    <Link
      as={NavLink}
      to={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        className={active}
        align="center"
        p="4"
        mx="6"
        borderRadius="10px"
        h="40px"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.700",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export { DLayout };
