import { Inter } from "next/font/google";
import WebGL from "../../components/WebGL";
import { Box, Flex, Stack } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex w="100vw" h="100vh">
        <Box w="10%" />
        <Stack w="90%">
          <Box w="100%" h="5%" />
          <WebGL />
        </Stack>
      </Flex>
    </>
  );
}
