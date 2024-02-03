import Link from "next/link";
import Image from "next/image";
import { Spacer, Flex, Center, HStack } from "@chakra-ui/react";

export default function TopNav() {
  return (
    <Flex as="nav">
      <Link href="/">
        <Image src="/farine.png" width={100} height={100} alt="Farine" />
      </Link>
      <Spacer />
      <HStack>
        <Center>
          <Link href="/bake">Bake</Link>
        </Center>
        <Center>
          <Link href="/login">Login</Link>
        </Center>
      </HStack>
    </Flex>
  );
}