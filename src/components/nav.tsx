import Link from "next/link"
import Image from "next/image"
import { Spacer, Flex, Center, HStack } from "@chakra-ui/react"

export default function TopNav() {
  return (
    <Flex
      as="nav"
      marginBottom={10}
    >
      <Link href="/">
        <Image
          src="/farine.png"
          width={100}
          height={100}
          alt="Farine"
        />
      </Link>
      <Spacer />
      <HStack spacing={10}>
        <Center>
          <Link href="/recipes">My recipes</Link>
        </Center>
        <Center>
          <Link href="/bake">Bake</Link>
        </Center>
        <Center>
          <Link href="/login">Login</Link>
        </Center>
      </HStack>
    </Flex>
  )
}
