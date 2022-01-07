import {
  Flex,
  Heading,
  useToast,
  Text,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { useRouter } from "next/router";

export default function NewTest() {
  const router = useRouter();
  const toast = useToast();
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
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
  }, []);
  async function handleSave() {
    const key = window.localStorage.getItem("key");
    const app = Realm.getApp("application-0-mzgor");
    await app.currentUser.functions
      .addMessage("website", key, Title, Body)
      .catch((err) => {
        toast({
          status: "error",
          title: "Error",
          description: err.message,
          duration: 9000,
          isClosable: true,
        });
      });
    toast({
      title: "Success",
      description: "Content has been sent to your phone",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    router.push("/");
  }
  return (
    <Flex px={4} direction={"column"} maxWidth={"640px"} mx={"auto"} my={16}>
      <Heading>Send text to your phone</Heading>
      <FormControl isInvalid={Title.length === 0} marginTop={8}>
        <FormLabel>Title</FormLabel>
        <Input
          value={Title}
          aria-label="title"
          placeholder="Alicia's phone number"
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormHelperText>
          Choose a meaningful name to retrieve it easily later
        </FormHelperText>
        <FormErrorMessage>This can&apos;t be empty.</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Body.length === 0} marginTop={8}>
        <FormLabel>Body</FormLabel>
        <Textarea
          value={Body}
          backgroundColor={"flish.400"}
          aria-label="content"
          placeholder="(000) 000-0000"
          onChange={(e) => setBody(e.target.value)}
        />
        <FormHelperText>The content of the exchange</FormHelperText>
        <FormErrorMessage>This can&apos;t be empty.</FormErrorMessage>
      </FormControl>
      <Button
        variant={"white"}
        marginTop={4}
        marginLeft={"auto"}
        isDisabled={Title.length === 0 || Body.length === 0}
        onClick={handleSave}
      >
        Send to phone
      </Button>
    </Flex>
  );
}
