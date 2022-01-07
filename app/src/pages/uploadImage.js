import {
  Flex,
  Heading,
  Input,
  FormControl,
  Button,
  Text,
  useToast,
  Spinner,
  Image,
} from "native-base";
import Header from "../components/header";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Realm from "realm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Cadre from "../../assets/image.png";

export default function ImageComponent() {
  const toast = useToast();
  const navigation = useNavigation();
  const [Cancelled, setCancelled] = useState(true);
  const [Title, setTitle] = useState("");
  const app = Realm.App.getApp("application-0-mzgor");
  async function pickAnImage() {
    /* If title is empty, break the function and show a toast */
    if (Title.length === 0) {
      toast.show({
        title: "Error",
        description: "Title can't be empty",
        status: "error",
      });
      return;
    }
    /* 
    This api open the native image picker.
    If the user cancels the picker, set Cancelled to true.
    If the user selects an image, set Cancelled to false.
    We need base64 encoding of the image to send it to the server.
    Also, we only single image (not multiple, nor videos)

    Conditionnal rendering is used following cancelled. If image picker is cancelled, it means that the user didn't select an image or cancelled the picker.
    If image picker is not cancelled, it means that the user selected an image. So it's uploading.
    */
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: false,
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (result.cancelled) {
      setCancelled(true);
      return;
    }
    setCancelled(false);
    /* We retrieve the sync key from storage */
    const id = await AsyncStorage.getItem("key");
    /* Upload image to server */
    await app.currentUser.functions
      .addImage("mobile", id, Title, result.base64)
      .then(() => {
        navigation.navigate("Home");
        toast.show({
          title: "Success",
          description: "Image uploaded",
          status: "success",
        });
      })
      .catch((e) => {
        navigation.navigate("Home");
        console.error(e);
        toast.show({
          title: "Error",
          description: "Image upload failed",
          status: "error",
        });
      });
  }
  if (Cancelled) {
    return (
      <>
        <Header />
        <Flex marginTop={8} flex={1}>
          <Heading marginBottom={4}>Upload image</Heading>
          <FormControl>
            <Text fontFamily={"Inter_600SemiBold"}>Title</Text>
            <Input
              placeholder="Title"
              backgroundColor={"app.300"}
              placeholderTextColor={"app.600"}
              fontSize={14}
              borderRadius={8}
              padding={2}
              paddingLeft={3}
              placeholder="Schema to deploy on Friday"
              value={Title}
              borderWidth={0}
              marginTop={1}
              onChangeText={(text) => setTitle(text)}
            />
          </FormControl>
          <Image
            margin={"auto"}
            alt="Photo in box"
            opacity={0.3}
            source={Cadre}
          />
          <Button
            size={"sm"}
            backgroundColor={"app.400"}
            _pressed={{ backgroundColor: "app.600" }}
            _text={{ color: "black", fontFamily: "Inter_600SemiBold" }}
            fontWeight={700}
            onPress={() => pickAnImage()}
            paddingTop={3}
            paddingBottom={3}
            borderRadius={10}
            marginTop={"auto"}
            backgroundColor={"app.400"}
          >
            Choose an image
          </Button>
        </Flex>
      </>
    );
  } else {
    return (
      <Flex flex={1} justify={"center"} align={"center"}>
        <Heading>Uploading</Heading>
        <Spinner marginTop={8} size={36} color={"app.700"} />
      </Flex>
    );
  }
}
