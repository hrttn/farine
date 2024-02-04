import SideNav from "@/components/recipes/side-nav";
import { Box, Flex } from "@chakra-ui/layout";

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex>
      <SideNav />
      <Box flex="1">{children}</Box>
    </Flex>
  );
}
