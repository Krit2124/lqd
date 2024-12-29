import Link from "next/link";
import Image from "next/image";

import { Container, Icon, Logo, Nav, Content, LogoText } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <Image src="img/logo.svg" alt="wallet" width={77} height={50} />
          <LogoText>
            <p>lqd<br/>banks</p>
          </LogoText>
        </Logo>
        <Nav>
          <Link href="/about">/about</Link>
          <Link href="/product">/product</Link>
          <Link href="/roadmap">/roadmap</Link>
          <Link href="/docs">/docs</Link>
          <Link href="/profile">/profile</Link>
        </Nav>
        <Icon>
          <Link href="/wallet">
            <Image src="img/wallet.svg" alt="wallet" width={57} height={57} />
          </Link>
        </Icon>
      </Content>
    </Container>
  );
}
