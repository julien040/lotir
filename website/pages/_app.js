import {
  ChakraProvider,
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Alert,
  Text,
  AlertDescription,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import Theme from "../theme/index";
import * as Realm from "realm-web";

function MyApp({ Component, pageProps }) {
  const app = new Realm.App({ id: "application-0-mzgor" });
  const credentials = Realm.Credentials.anonymous();
  app.logIn(credentials);
  return (
    <ChakraProvider theme={Theme}>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          background-color: #e3ecff;
        }
      `}</style>
      <Header />
      <Box marginLeft={"auto"} marginRight={"auto"} maxWidth="1280px">
        <Component {...pageProps} />

        <Alert my={8} mx={4} backgroundColor={"flish.400"} status="info">
          <AlertDescription fontSize={14}>
            This project has been created for the MongoDB Atlas Hackathon.{" "}
            <br />
            <Link href="https://dev.to/julien41/lotir-share-link-and-images-between-your-phone-and-your-computer-3cd9">
              <Text
                _hover={{ textDecoration: "underline" }}
                color={"flish.700"}
                cursor={"pointer"}
              >
                Check the submission here <ExternalLinkIcon />{" "}
              </Text>
            </Link>
          </AlertDescription>
        </Alert>
        <a href="https://icons8.com/">Icon by Icons8</a>
      </Box>
    </ChakraProvider>
  );
}

const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        maxWidth="1280px"
        px={{ base: 2, sm: 4 }}
        py={4}
        marginRight={"auto"}
        marginLeft={"auto"}
        backgroundColor={"flish.100"}
        borderRadius={10}
        marginTop={[0, 6]}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link href="/">
              <svg
                width={72}
                height={27}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: "pointer" }}
              >
                <path
                  d="M.16 26V.8h4.392v20.808h10.494V26H.16Zm25.287.468c-1.656 0-3.168-.426-4.536-1.278a9.582 9.582 0 0 1-3.258-3.42c-.804-1.44-1.206-3.03-1.206-4.77 0-1.32.234-2.55.702-3.69a9.642 9.642 0 0 1 1.926-3.024 9.034 9.034 0 0 1 2.88-2.052 8.403 8.403 0 0 1 3.492-.738c1.656 0 3.162.426 4.518 1.278a9.341 9.341 0 0 1 3.258 3.438c.816 1.44 1.224 3.036 1.224 4.788a9.574 9.574 0 0 1-.702 3.672 9.751 9.751 0 0 1-1.944 3.024 8.96 8.96 0 0 1-2.862 2.034 8.323 8.323 0 0 1-3.492.738Zm0-4.392a4.13 4.13 0 0 0 2.358-.702 4.897 4.897 0 0 0 1.638-1.854 5.287 5.287 0 0 0 .612-2.52c0-.936-.21-1.788-.63-2.556a4.811 4.811 0 0 0-1.674-1.854 4.041 4.041 0 0 0-2.304-.702 4.1 4.1 0 0 0-2.34.702 5.008 5.008 0 0 0-1.656 1.872A5.393 5.393 0 0 0 20.84 17c0 .948.21 1.806.63 2.574.42.768.978 1.38 1.674 1.836a4.256 4.256 0 0 0 2.304.666Zm21.662-9.684h-3.492V26h-4.392V12.392H36.56V8h2.664V2.348h4.392V8h3.492v4.392ZM49.379 8h4.392v18h-4.392V8Zm2.214-2.682c-.636 0-1.176-.21-1.62-.63-.444-.432-.666-.972-.666-1.62 0-.636.222-1.17.666-1.602a2.237 2.237 0 0 1 1.62-.648c.636 0 1.17.216 1.602.648.444.432.666.966.666 1.602 0 .648-.222 1.188-.666 1.62-.432.42-.966.63-1.602.63Zm18.995 7.146a4.601 4.601 0 0 0-1.062-.522 3.694 3.694 0 0 0-1.242-.198c-.876 0-1.632.228-2.268.684-.624.456-1.104 1.068-1.44 1.836-.336.756-.504 1.596-.504 2.52V26h-4.428V8h4.392v2.124a6.98 6.98 0 0 1 2.142-1.89c.84-.468 1.788-.702 2.844-.702.408 0 .798.012 1.17.036.384.024.75.09 1.098.198l-.702 4.698Z"
                  fill="#766FF7"
                />
              </svg>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              mr={1}
              color="blackAlpha.800"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href={"/newText"}>
                <Button backgroundColor={"transparent"} variant="ghost">
                  New Text
                </Button>
              </Link>
              <Link href={"/newImage"}>
                <Button backgroundColor={"transparent"} variant="ghost">
                  New Image
                </Button>
              </Link>
              <Link href={"/exchanges"}>
                <Button backgroundColor={"transparent"} variant="ghost">
                  Your exchanges
                </Button>
              </Link>
              <Link href={"/settings"}>
                <Button backgroundColor={"transparent"} variant="ghost">
                  Settings
                </Button>
              </Link>
            </HStack>
            <Button
              onClick={() =>
                window.open("https://github.com/julien040/lotir/releases")
              }
              colorScheme="flish"
              color={"black"}
              size={"sm"}
            >
              Download
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link href={"/newText"}>
                  <Button
                    w="full"
                    backgroundColor={"transparent"}
                    variant="ghost"
                  >
                    New text
                  </Button>
                </Link>
                <Link href={"/newImage"}>
                  <Button
                    w="full"
                    backgroundColor={"transparent"}
                    variant="ghost"
                  >
                    New image
                  </Button>
                </Link>
                <Link href={"/exchanges"}>
                  <Button
                    w="full"
                    backgroundColor={"transparent"}
                    variant="ghost"
                  >
                    Your exchanges
                  </Button>
                </Link>
                <Link href={"/settings"}>
                  <Button
                    w="full"
                    backgroundColor={"transparent"}
                    variant="ghost"
                  >
                    Settings
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default MyApp;
