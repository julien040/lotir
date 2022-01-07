import Head from "next/head";
import {
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Box,
  Alert,
  AlertDescription,
  AlertIcon,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lotir App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex wrap={"wrap"} mx={4} my={16} justify={"space-between"}>
        <Flex minWidth={"240px"} direction={"column"}>
          <Heading
            fontSize={[36, 48, 60]}
            bgClip="text"
            bgGradient="linear(to-l, flish.700, flish.800)"
          >
            Share anything between your
            <br /> phone and your computer
          </Heading>
          <Text fontSize={[14, 14, 16]} fontWeight={600} marginTop={6}>
            Have you ever wanted to share a file, or some text between your
            phone and your computer ?
            <br />
            Lotir is a simple way to share content between your devices.
          </Text>
        </Flex>
        <Box margin={"auto"} marginTop={[6, 0]}>
          <Image
            maxHeight={"640px"}
            alt="Home screen of lotir app"
            src="/home.png"
            margin={"auto"}
            borderRadius={10}
            boxShadow="0px 0px 80px rgba(0, 0, 0, 0.09)"
          />
          <Text
            marginTop={1}
            fontSize={12}
            color={"gray.500"}
            textAlign={"center"}
          >
            Home screen of lotir app
          </Text>
        </Box>
      </Flex>
      <Heading mx={4} fontSize={[24, 32, 40]}>
        Features
      </Heading>
      <Flex
        gap={2}
        wrap={"wrap"}
        marginTop={16}
        marginBottom={32}
        justify={"space-between"}
      >
        <Flex
          margin={"auto"}
          direction={"column"}
          align={"center"}
          width={"20%"}
          minWidth={"280px"}
        >
          <img src="https://img.icons8.com/color/48/000000/image-file.png" />
          <Heading marginTop={4} textAlign={"center"} fontSize={20}>
            Share images
          </Heading>
          <Text
            marginTop={2}
            fontSize={14}
            color={"gray.600"}
            textAlign={"center"}
          >
            You can share images between your phone and your computer.
          </Text>
        </Flex>
        <Flex
          margin={"auto"}
          direction={"column"}
          align={"center"}
          width={"20%"}
          minWidth={"280px"}
        >
          <img src="https://img.icons8.com/color/48/000000/align-left.png" />
          <Heading marginTop={4} textAlign={"center"} fontSize={20}>
            Share Text
          </Heading>
          <Text
            marginTop={2}
            fontSize={14}
            color={"gray.600"}
            textAlign={"center"}
          >
            You can share any text between your phone and your computer.
          </Text>
        </Flex>
        <Flex
          margin={"auto"}
          direction={"column"}
          align={"center"}
          width={"20%"}
          minWidth={"280px"}
        >
          <img src="https://img.icons8.com/color/48/000000/appointment-reminders.png" />
          <Heading marginTop={4} textAlign={"center"} fontSize={20}>
            Notification
          </Heading>
          <Text
            marginTop={2}
            fontSize={14}
            color={"gray.600"}
            textAlign={"center"}
          >
            Thanks to{" "}
            <Link
              color={"flish.700"}
              href="https://docs.mongodb.com/realm/triggers/trigger-types/"
            >
              MongoDB Realm Trigger <ExternalLinkIcon />
            </Link>
            , sharing something creates a notification
          </Text>
        </Flex>
        <Flex
          margin={"auto"}
          direction={"column"}
          align={"center"}
          width={"20%"}
          minWidth={"280px"}
        >
          <img src="https://img.icons8.com/color/48/000000/cloud-sync--v2.png" />
          <Heading marginTop={4} textAlign={"center"} fontSize={20}>
            Sync
          </Heading>
          <Text
            marginTop={2}
            fontSize={14}
            color={"gray.600"}
            textAlign={"center"}
          >
            Thanks to{" "}
            <Link
              color={"flish.700"}
              href="https://docs.mongodb.com/realm/functions/"
            >
              MongoDB Realm Functions <ExternalLinkIcon />
            </Link>
            , your data is saved in mongoDB.
          </Text>
        </Flex>
      </Flex>
      <Heading mx={4} fontSize={[24, 32, 40]}>
        Examples
      </Heading>
      <Flex
        gap={2}
        wrap={"wrap"}
        my={8}
        marginBottom={32}
        justify={"space-between"}
      >
        <Flex
          margin={"auto"}
          maxWidth={"400px"}
          p={4}
          borderRadius={10}
          direction={"column"}
          backgroundColor={"flish.100"}
        >
          <Image
            boxSize={12}
            src="https://img.icons8.com/color/48/000000/filled-sent.png"
          />
          <Heading marginTop={6} fontSize={16}>
            Sharing a mail adress
          </Heading>
          <Text marginTop={2} fontSize={14} color={"gray.500"}>
            Imagine you just received a text from your friend. He gave you his
            mail adress. Don&apos;t copy it manually. Use Lotir to transfer it to
            your computer.
          </Text>
        </Flex>
        <Flex
          margin={"auto"}
          maxWidth={"400px"}
          p={4}
          borderRadius={10}
          direction={"column"}
          backgroundColor={"flish.100"}
        >
          <Image
            boxSize={12}
            src="https://img.icons8.com/color/48/000000/cat_in_a_box.png"
          />
          <Heading marginTop={6} fontSize={16}>
            Your last photo
          </Heading>
          <Text marginTop={2} fontSize={14} color={"gray.500"}>
            You love your cat and you want him to be your wallpaper. Use Lotir
            to transfer your photo to your computer in a minute.
          </Text>
        </Flex>
        <Flex
          margin={"auto"}
          maxWidth={"420px"}
          p={4}
          borderRadius={10}
          direction={"column"}
          backgroundColor={"flish.100"}
        >
          <Image
            boxSize={12}
            src="https://img.icons8.com/color/48/000000/news.png"
          />
          <Heading marginTop={6} fontSize={16}>
            Share a link
          </Heading>
          <Text marginTop={2} fontSize={14} color={"gray.500"}>
            Yesterday, you saw a fantastic article about Vim shortcuts on your
            computer. Your best friend on WhatsApp wants to see it too. Use
            Lotir to transfer the link to your phone.
          </Text>
        </Flex>
      </Flex>
      <Heading mx={4} fontSize={[24, 32, 40]}>
        Technologies used
      </Heading>
      <UnorderedList spacing={3} ml={4} my={8}>
        <ListItem fontWeight={600} fontSize={18} mx={4}>
          Expo
          <Text fontWeight={400} fontSize={14} color={"gray.600"}>
            To build native mobile app, I used Expo. So, Lotir is available on
            Android and iOS
          </Text>
        </ListItem>
        <ListItem fontWeight={600} fontSize={18} mx={4}>
          MongoDB Realm Functions
          <Text fontWeight={400} fontSize={14} color={"gray.600"}>
            To communicate between Front end and Back end, I used MongoDB Realm
            Functions. These functions are triggered by the user when he share
            something. These are serverless and interact with a MongoDB database
            hosted by MongoDB Atlas
          </Text>
        </ListItem>
        <ListItem fontWeight={600} fontSize={18} mx={4}>
          MongoDB Realm Trigger
          <Text fontWeight={400} fontSize={14} color={"gray.600"}>
            When a user shares something from a computer, a notification is sent
            to the phone. To make this possible, I rely on MongoDB Realm
            Trigger. These triggers check the database for new documents, and
            when one matches the trigger, it sends a notification.
          </Text>
        </ListItem>
        <ListItem fontWeight={600} fontSize={18} mx={4}>
          MongoDB Atlas
          <Text fontWeight={400} fontSize={14} color={"gray.600"}>
            Data is stored in MongoDB Atlas. This is a cloud database that
            provides high availability, high performance, and scalability.
          </Text>
        </ListItem>
        <ListItem fontWeight={600} fontSize={18} mx={4}>
          MongoDB Realm Hosting
          <Text fontWeight={400} fontSize={14} color={"gray.600"}>
            This websites uses MongoDB Realm Hosting. Because website is mostly
            static, it&apos;s a great solution.
          </Text>
        </ListItem>
        <ListItem fontWeight={600} fontSize={18} mx={4}>
          Next Js
          <Text fontWeight={400} fontSize={14} color={"gray.600"}>
            Website is built with NextJs and React.
          </Text>
        </ListItem>
        <ListItem fontWeight={600} fontSize={18} mx={4}>
          Chakra UI
          <Text fontWeight={400} fontSize={14} color={"gray.600"}>
            Website UI is built with Chakra UI. I&apos;ve added a custom theme on top
            of it.
          </Text>
        </ListItem>
        <ListItem fontWeight={600} fontSize={18} mx={4}>
          Native Base
          <Text fontWeight={400} fontSize={14} color={"gray.600"}>
            Mobile UI is built with NativeBase. This reduces the amount of
            stylesheet.
          </Text>
        </ListItem>
        <ListItem fontWeight={600} fontSize={18} mx={4}>
          imgBB
          <Text fontWeight={400} fontSize={14} color={"gray.600"}>
            Image hosting is handled by imgBB. Image are first sent to a realm
            Function.
          </Text>
        </ListItem>
      </UnorderedList>
    </>
  );
}
