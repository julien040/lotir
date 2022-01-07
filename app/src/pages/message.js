import {
  Flex,
  FlatList,
  Heading,
  Button,
  Image,
  Text,
  Pressable,
  Alert,
  Spinner,
} from "native-base";
import Header from "../components/header";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from "react-native";
import * as Clipboard from "expo-clipboard";

export default function Message() {
  const [Data, setData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      const key = await AsyncStorage.getItem("key");
      if (key) {
        const app = Realm.App.getApp("application-0-mzgor");
        const messages = await app.currentUser.functions.getMessages(key);
        setData(messages);
      }
    })();
  }, []);
  return (
    <>
      <Header />
      <Flex marginTop={8} flex={1}>
        <Heading color={"black"} fontSize={28} marginBottom={4}>
          Last share
        </Heading>
        <FlatList
          data={Data}
          flex={1}
          keyExtractor={(item) => item.time}
          ListHeaderComponent={() => (
            <Alert
              borderRadius={10}
              backgroundColor={"app.300"}
              display={"flex"}
              flexDirection={"row"}
              status={"info"}
              marginBottom={8}
            >
              <Alert.Icon marginRight={4} />
              <Flex>
                <Text>Click on an item to copy content to clipboard</Text>
                <Text>Click on an image to open it in the browser</Text>
              </Flex>
            </Alert>
          )}
          ListEmptyComponent={() => (
            <Flex height={400} align={"center"} justify={"center"} flex={1}>
              <Heading marginBottom={2} color={"app.700"}>Loading...</Heading>
              <Text marginBottom={4} textAlign={"center"} >
                If this takes too long, please check your internet connection or create your first share
              </Text>
              <Spinner marginTop={4} size={36} color={"app.700"} />
            </Flex>
          )}
          renderItem={({ item }) => {
            if (
              item.body.startsWith("https://") &&
              item.body.endsWith(".png")
            ) {
              return (
                <Pressable
                  marginTop={2}
                  onPress={() => Linking.openURL(item.body)}
                  backgroundColor={"app.300"}
                  padding={3}
                  borderRadius={10}
                >
                  <Flex flex={1}>
                    <Heading>{item.title}</Heading>
                    <Image
                      resizeMode={"cover"}
                      style={{ width: "100%", height: 200 }}
                      alt={item.title}
                      source={{ uri: item.body }}
                      borderRadius={10}
                      marginTop={6}
                    />
                  </Flex>
                </Pressable>
              );
            } else {
              return (
                <Pressable
                  marginTop={2}
                  backgroundColor={"app.300"}
                  padding={3}
                  borderRadius={10}
                  onPress={() => {
                    Clipboard.setString(item.body);
                    alert("Copied to clipboard");
                  }}
                >
                  <Heading fontSize={20} color={"black"}>
                    {item.title}
                  </Heading>
                  <Text fontSize={16} color={"gray.600"} marginTop={1}>
                    {item.body}
                  </Text>
                  <Text fontSize={13} color={"gray.400"} marginLeft={"auto"}>
                    {" "}
                    From {item.platform}{" "}
                  </Text>
                </Pressable>
              );
            }
          }}
        />
      </Flex>
    </>
  );
}
