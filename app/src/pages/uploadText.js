import {
  Button,
  Flex,
  Heading,
  Input,
  TextArea,
  FormControl,
  Text,
  useToast,
} from "native-base";
import Footer from "../components/footer";
import Header from "../components/header";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Realm from "realm";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TextComponent() {
  const toast = useToast();
  const navigation = useNavigation();
  const app = Realm.App.getApp("application-0-mzgor");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  async function addMessage() {
    /* Get the sync key from storage */
    const id = await AsyncStorage.getItem("key");
    /* If sync key isn't set, break function and show a toast */
    if (!id) {
      toast.show({
        title: "Error",
        description: "No sync key set",
        status: "error",
      });
      return;
    }
    /* If no title is set, break */
    if (Title.length === 0) {
      toast.show({
        title: "Error",
        description: "Title can't be empty",
        status: "error",
      });
      return;
    }
    /* If no content is set, break */
    if (Content.length === 0) {
      toast.show({
        title: "Error",
        description: "Content can't be empty",
        status: "error",
      });
      return;
    }
    /* Create a new message object in MongoDB database using Realm Functions */
    app.currentUser.functions
      .addMessage("mobile", id, Title, Content)
      .then(() => {
        toast.show({
          title: "Success",
          description: "Message added",
          status: "success",
        });
        navigation.goBack();
      })
      .catch((e) => {
        toast.show({
          title: "Error",
          description: "Can't add message",
          status: "error",
        });
        toast.show({
          title: "Status",
          description: e.message,
          status: "error",
        });
      });
  }
  return (
    <>
      <Header />
      <Flex flex={1}>
        <Heading
          color={"app.800"}
          marginTop={6}
          marginBottom={4}
          fontSize={24}
          fontWeight={700}
        >
          Share text to your computer
        </Heading>
        <FormControl marginBottom={6}>
          <Text fontWeight={600} marginBottom={2}>
            Title
          </Text>
          <Input
            backgroundColor={"app.300"}
            placeholderTextColor={"app.600"}
            fontSize={14}
            borderRadius={8}
            padding={2}
            paddingLeft={3}
            placeholder="Vim shortcut"
            value={Title}
            borderWidth={0}
            onChangeText={(text) => setTitle(text)}
          />
        </FormControl>
        <FormControl flex={1}>
          <Text fontWeight={600} marginBottom={2}>
            Content
          </Text>
          <TextArea
            flex={1}
            style={{ overflow: "scroll" }}
            backgroundColor={"app.300"}
            placeholder="Is it possible to exit at least ?"
            placeholderTextColor={"app.600"}
            fontSize={14}
            borderRadius={8}
            padding={3}
            value={Content}
            borderWidth={0}
            onChangeText={(text) => setContent(text)}
          />
        </FormControl>
        <Button
          backgroundColor={"app.400"}
          _pressed={{ backgroundColor: "app.500" }}
          _text={{ color: "black", fontFamily: "Inter_600SemiBold" }}
          fontWeight={700}
          onPress={() => addMessage()}
          paddingTop={3}
          paddingBottom={3}
          borderRadius={10}
          marginTop={4}
        >
          Send to computer
        </Button>
      </Flex>
    </>
  );
}
