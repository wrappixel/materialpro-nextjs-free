import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "64px",
  width: "174px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/light-logo.svg" alt="logo" height={64} width={174} priority />
    </LinkStyled>
  );
};

export default Logo;
