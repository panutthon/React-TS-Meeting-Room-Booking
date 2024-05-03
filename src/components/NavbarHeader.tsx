import React from "react";
import navbarheader from "../styles/navbarheader.module.css";
import {
  IconButton,
  Flex,
  FlexProps,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const NavbarHeader: React.FC = () => {
  const { onOpen } = useDisclosure();
  return (
    <div className={navbarheader.navbarbar}>
      <img
        src="https://s3-alpha-sig.figma.com/img/6fad/2e5d/f8317d16a497f346869b8c0d8f023f65?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKx-qw1WCrQeEgoiFZe-JbfVTrt7wvXq3accZ--tj7pZlTEs5ZRN0lpyHjTvCryaAiovWroPT3IsoY5SJAEGIfv-4FYWHIijj68UZ-GDJ36SZZWeYYx7-rNiX5Wx9mF5rnUpxSpvv0zayH~HKR4vNUJy3N7AM4hkQNmKXGLjSwIZZRFUfTgKYmmTCwDhf9HaSd7So4cvC3ckl6P7j1gpxaroniMXMNhHOXMjtAF7Bj61uCnZKPksGkD5wG9OKAOmjbpPpIaugouaT4jRsqFzQ50HGvabVU7rtGStbyU0RaKZ8UlvAdWyvVX-XO3SJ7lHIqJ-IH0KU-KY4egO6JC2Eg__"
        alt="Image"
        width="222.222px"
      />
      <MobileNav onOpen={onOpen} />
    </div>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex ml={5} display={{ base: "flex", md: "none" }} {...rest}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};

export default NavbarHeader;
