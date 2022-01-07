import {
  Flex,
  Heading,
  FormControl,
  Input,
  Text,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormErrorIcon,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Settings() {
  const [Key, setKey] = useState("");
  const toast = useToast();
  useEffect(() => {
    const key = window.localStorage.getItem("key");
    if (key) {
      setKey(key);
    }
  }, []);
  function handleSave() {
    window.localStorage.setItem("key", Key);
    toast({
      title: "Success",
      description: "Your key has been saved",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  return (
    <Flex px={4} direction={"column"} maxWidth={"640px"} mx={"auto"} my={16}>
      <Heading>Settings</Heading>
      <FormControl isInvalid={Key.length === 0} marginTop={6}>
        <FormLabel htmlFor="email">Sync key</FormLabel>
        <Input
          value={Key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="gdfg57fsdgn"
        />
        <FormErrorMessage>
          <FormErrorIcon />
          This can&apos;t be empty.
        </FormErrorMessage>

        <FormHelperText>
          This should be the same as the one on your phone
        </FormHelperText>
      </FormControl>
      <Button
        marginTop={4}
        marginLeft={"auto"}
        variant={"white"}
        size="md"
        width={"20%"}
        isDisabled={Key.length === 0}
        onClick={handleSave}
      >
        Save
      </Button>
      <Heading marginTop={16}>Guide 🦄</Heading>
      <Text marginTop={8}>
        Lotir does not require an account to use. Instead, it relies on a secret
        key : the synchronization key. This one should be the same on your
        computer and on your phone. It tells the app which data to sync.
      </Text>
      <Heading marginTop={6} fontSize={20}>
        How to set up sync key on your phone? 🤔
      </Heading>
      <Text marginTop={2}>
        You can find it on the settings page of the lotir app. On first start, a
        random key will be generated. However, you can at any time change for
        another one. It works if you have the same on your computer
      </Text>
      <Heading marginTop={6} fontSize={20}>
        How to set up sync key on your computer? 🤔
      </Heading>
      <Text marginTop={2}>
        To setup the sync key on your computer, you need to take the one in the
        app, and put it in the settings page of the lotir website.
      </Text>
    </Flex>
  );
}
