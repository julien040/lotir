import {
  Flex,
  Heading,
  Text,
  Input,
  FormControl,
  Button,
  useToast,
  Image,
} from "native-base";
import { useState, useEffect } from "react";
import Header from "../components/header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Wheel from "../../assets/settings.png";

export default function Settings() {
  const toast = useToast();
  const [Key, setKey] = useState("");
  const [Invalid, setInvalid] = useState(false);
  useEffect(() => {
    (async () => {
      const key = await AsyncStorage.getItem("key");
      if (key) {
        setKey(key);
      }
    })();
  }, []);
  useEffect(() => {
    if (Key.length > 0) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }, [Key]);
  return (
    <Flex flex={1}>
      <Header />
      <Heading marginTop={8}>Settings</Heading>
      <FormControl isInvalid={Invalid} marginTop={3}>
        <Text fontWeight={600} marginBottom={2}>
          Sync key
        </Text>
        <Input
          value={Key}
          fontSize={14}
          borderRadius={8}
          padding={2}
          _invalid={{ backgroundColor: "red" }}
          paddingLeft={3}
          onChangeText={(e) => setKey(e)}
          backgroundColor={"app.300"}
          borderWidth={0}
        />
        <FormControl.ErrorMessage>Can't be empty</FormControl.ErrorMessage>
      </FormControl>
      <Image
        flex={1 / 2}
        margin={"auto"}
        alt="Photo in box"
        opacity={0.6}
        source={Wheel}
      />
      <Button
        backgroundColor={"app.400"}
        _pressed={{ backgroundColor: "app.500" }}
        _text={{ color: "black", fontFamily: "Inter_600SemiBold" }}
        fontWeight={700}
        paddingTop={3}
        paddingBottom={3}
        borderRadius={10}
        onPress={() => {
          if (Key.length > 0) {
            AsyncStorage.setItem("key", Key)
              .then(() => {
                toast.show({
                  title: "Key saved",
                  description: "Your sync key has been successfully saved",
                  duration: 3000,
                  placement: "top",
                  status: "success",
                });
              })
              .catch((e) => {
                toast.show({
                  title: "Couldn't save key",
                  description: e.message,
                  duration: 3000,
                  placement: "top",
                  status: "error",
                });
              });
          }
        }}
      >
        Save
      </Button>
    </Flex>
  );
}
