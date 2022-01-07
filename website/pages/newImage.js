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
import { useState, useEffect, useRef } from "react";
import * as Realm from "realm-web";
import { useRouter } from "next/router";

export default function NewImage() {
  const router = useRouter();
  const toast = useToast();
  const [Title, setTitle] = useState("");
  const imageRef = useRef();
  console.log(imageRef.current);
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
    if (imageRef.current.files.length === 0) {
      toast({
        status: "error",
        title: "Error",
        description: "You need to select an image",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      await app.currentUser.functions
        .addImage("website", key, Title, reader.result.slice(22)) // slice to remove data:image/png;base64,
        .catch((e) => {
          toast({
            status: "error",
            title: "Error",
            description: e.message,
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
    };
  }
  return (
    <Flex px={4} direction={"column"} maxWidth={"640px"} mx={"auto"} my={16}>
      <Heading>Send an image to your phone</Heading>
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
      <FormControl>
        <FormLabel>Image</FormLabel>
        <Input ref={imageRef} type={"file"} name="Image" accept="image/png" />
      </FormControl>
      <Button
        variant={"white"}
        marginTop={4}
        marginLeft={"auto"}
        isDisabled={Title.length === 0}
        onClick={handleSave}
      >
        Send to phone
      </Button>
    </Flex>
  );
}
