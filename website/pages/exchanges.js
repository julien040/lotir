import {
  Flex,
  Heading,
  useToast,
  Text,
  Button,
  Image,
  useClipboard,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { useRouter } from "next/router";
import { CopyIcon } from "@chakra-ui/icons";

export default function Exchanges() {
  const router = useRouter();
  const toast = useToast();
  const [Exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const key = window.localStorage.getItem("key");
    if (!key || key.length === 0) {
      toast({
        status: "warning",
        title: "Warning",
        description: "You need to set a sync key before accessing exchanges 😉",
        duration: 9000,
        isClosable: true,
      });
      router.push("/settings");
    }
    (async () => {
      const app = Realm.getApp("application-0-mzgor");
      const result = await app.currentUser.functions.getMessages(key);
      setExchanges(result);
    })();
  }, []);
  return (
    <Flex px={4} direction={"column"} mx={"auto"} my={16}>
      <Heading>Your last exchanges</Heading>
      <Text marginTop={2} color={"gray.500"} fontSize={14}>
        Click on text to copy to clipboard <CopyIcon />
      </Text>
      <Flex wrap={"wrap"} gap={4} marginTop={6} height={"100%"}>
        {Exchanges.length === 0 && (
          <Flex
            width={"100%"}
            direction={"column"}
            justify={"center"}
            align={"center"}
            my={32}
          >
            <Text fontSize={14} fontWeight={600}>
              You don&apos;t have any exchanges yet
            </Text>
            <Button
              onClick={() => router.push("/text")}
              marginTop={4}
              size={"sm"}
            >
              Create first exchange
            </Button>
          </Flex>
        )}
        {Exchanges.map((message) => (
          <SingleItem
            platform={message.platform}
            title={message.title}
            body={message.body}
            key={Math.random()} //I forgot to put a random ID in DB
          />
        ))}
      </Flex>
    </Flex>
  );
}

const SingleItem = ({ platform, title, body }) => {
  const { onCopy } = useClipboard(body);
  const toast = useToast();

  function handleCopy() {
    onCopy();
    toast({
      status: "success",
      title: "Copied",
      description: "Content has been copied to clipboard",
      duration: 9000,
      isClosable: true,
    });
  }
  if (body.startsWith("https://") && body.endsWith(".png")) {
    return (
      <Flex
        onClick={() => window.open(body)}
        cursor={"pointer"}
        backgroundColor={"flish.100"}
        p={3}
        borderRadius={10}
        width={"30%"}
        minWidth={320}
        direction={"column"}
        mx={"auto"}
      >
        <Heading fontSize={20} marginBottom={4}>
          {title}
        </Heading>
        <Image src={body} />
        <Text
          marginTop={2}
          fontSize={13}
          marginLeft={"auto"}
          color={"gray.500"}
        >
          From {platform}
        </Text>
      </Flex>
    );
  } else {
    return (
      <Flex
        direction={"column"}
        backgroundColor={"flish.100"}
        p={5}
        borderRadius={10}
        width={"30%"}
        minWidth={320}
        mx={"auto"}
        maxHeight={"240px"}
      >
        <Heading fontSize={20} marginBottom={4}>
          {title}
        </Heading>
        <Text
          onClick={handleCopy}
          cursor={"copy"}
          color={"gray.500"}
          fontSize={15}
          overflow={"hidden"}
          whiteSpace={"pre-wrap"}
          textOverflow={"ellipsis"}
          
        >
          {body}
        </Text>
        <Text
          marginTop={"auto"}
          fontSize={13}
          marginLeft={"auto"}
          color={"gray.500"}
        >
          From {platform}
        </Text>
      </Flex>
    );
  }
};
