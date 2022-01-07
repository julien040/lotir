import { Flex, Heading, Image, Text, Pressable } from "native-base";
import Footer from "../components/footer";
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
export default function Home() {
  const navigation = useNavigation();
  return (
    <Flex marginLeft={1} flex={1}>
      <Header />
      <Flex overflow="scroll" flex={1}>
        <Heading fontSize={34} marginTop={8}>
          What do you want to do?
        </Heading>
        <Text fontWeight={600} fontSize={15} marginTop={2} color={"app.700"}>
          Lotir lets you share text or image between your devices. Ditch the
          self email.
        </Text>
        <Flex
          direction="row"
          marginTop={12}
          justify={"space-between"}
          wrap="wrap"
        >
          <Pressable
            marginBottom={4}
            onPress={() => navigation.navigate("Text")}
            width={"48%"}
          >
            <Flex
              borderRadius={10}
              padding={4}
              py={8}
              align={"center"}
              flex={1}
              backgroundColor={"app.400"}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/color/96/000000/align-cell-content-left.png",
                }}
                alt="Multine Text Icon"
                width={50}
                height={50}
              />
              <Text
                fontSize={18}
                marginTop={4}
                fontWeight={700}
                color={"app.700"}
              >
                Share Text
              </Text>
              <Text color={"gray.500"} fontSize={12}>
                Take less than 20s
              </Text>
            </Flex>
          </Pressable>
          <Pressable
            marginBottom={4}
            onPress={() => navigation.navigate("Image")}
            width={"48%"}
          >
            <Flex
              borderRadius={10}
              padding={4}
              py={8}
              align={"center"}
              flex={1}
              backgroundColor={"app.400"}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/color/96/000000/image-file.png",
                }}
                alt="Image Icon"
                width={50}
                height={50}
              />
              <Text
                fontSize={18}
                marginTop={4}
                fontWeight={700}
                color={"app.700"}
              >
                Share Image
              </Text>
              <Text color={"gray.500"} fontSize={12}>
                Take less than 40s
              </Text>
            </Flex>
          </Pressable>
          <Pressable
            marginBottom={4}
            onPress={() => navigation.navigate("Message")}
            width={"48%"}
          >
            <Flex
              borderRadius={10}
              padding={4}
              py={8}
              align={"center"}
              flex={1}
              backgroundColor={"app.400"}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/color-glass/96/000000/share.png",
                }}
                alt="Share Icon"
                width={50}
                height={50}
              />
              <Text
                fontSize={18}
                marginTop={4}
                fontWeight={700}
                color={"app.700"}
              >
                Last Share
              </Text>
              <Text color={"gray.500"} fontSize={12}>
                What is...
              </Text>
            </Flex>
          </Pressable>
          <Pressable
            marginBottom={4}
            onPress={() => navigation.navigate("Settings")}
            width={"48%"}
          >
            <Flex
              borderRadius={10}
              padding={4}
              py={8}
              align={"center"}
              flex={1}
              backgroundColor={"app.400"}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/color/96/000000/settings--v1.png",
                }}
                alt="Settings Icon"
                width={50}
                height={50}
              />
              <Text
                fontSize={18}
                marginTop={4}
                fontWeight={700}
                color={"app.700"}
              >
                Settings
              </Text>
              <Text color={"gray.500"} fontSize={12}>
                Change sync key
              </Text>
            </Flex>
          </Pressable>
        </Flex>
      </Flex>
    </Flex>
  );
}
