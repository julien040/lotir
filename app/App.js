import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_900Black,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_300Light,
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, extendTheme, Box } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/pages/home";
import Message from "./src/pages/message";
import Settings from "./src/pages/settings";
import ImageComponent from "./src/pages/uploadImage";
import TextComponent from "./src/pages/uploadText";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notification from "expo-notifications";
import Realm from "realm";
import { setBackgroundColorAsync } from "expo-system-ui";

/* 
  This is a custom theme used for the native-base components.
  It loads the fonts from the google fonts and sets the colors.
 */
const theme = extendTheme({
  fontConfig: {
    Inter: {
      300: {
        normal: "Inter_300Light",
      },
      400: {
        normal: "Inter_400Regular",
      },
      500: {
        normal: "Inter_500Medium",
      },
      600: {
        normal: "Inter_600SemiBold",
      },
      700: {
        normal: "Inter_700Bold",
      },
      800: {
        normal: "Inter_800ExtraBold",
      },
      900: {
        normal: "Inter_900Black",
      },
    },
    Urbanist: {
      600: {
        normal: "Urbanist_semi",
      },
      700: {
        normal: "Urbanist_bold",
      },
    },
  },
  fonts: {
    heading: "Urbanist",
    body: "Inter",
  },
  colors: {
    app: {
      100: "#FAFAFF",
      200: "#EFF0FF",
      300: "#EAE9FF",
      400: "#DFDDFF",
      500: "#D1CEFF",
      600: "#B9B4FF",
      700: "#7879F1",
      800: "#5D5FEF",
    },
  },
});

export default function App() {
  var app;
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
    Urbanist_semi: require("./assets/Urbanist-SemiBold.ttf"),
    Urbanist_bold: require("./assets/Urbanist-Bold.ttf"),
  });
  /* Create a native router for the app */
  const Stack = createNativeStackNavigator();
  setBackgroundColorAsync("#EFF0FF");

  /*
   * Check if a sync key has been set. If not, set one.
   */
  useEffect(() => {
    (async () => {
      var key = await AsyncStorage.getItem("key");
      if (!key) {
        const newKey = generateString();
        key = newKey;
        await AsyncStorage.setItem("key", newKey);
      }
      const { status } = await Notification.getPermissionsAsync();
      if (status !== "granted") {
        alert(
          "Notifications are required to be aware when a new message is received."
        );
        await Notification.requestPermissionsAsync({});
      }
      app = new Realm.App({ id: "application-0-mzgor" });
      const credentials = Realm.Credentials.anonymous();
      await app.logIn(credentials);
      const { data } = await Notification.getExpoPushTokenAsync({
        experienceId: "@julien040/app",
      });
      await app.currentUser.functions.setToken(key, data);
      if (Platform.OS === "android") {
        Notification.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notification.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }
      Notification.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
        }),
      });
    })();
  }, []);
  /* In case app is not loaded yet, show the splash screen */
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        {/* Set the status bar of the phone */}
        <StatusBar style="dark" translucent={true} />
        <SafeAreaView style={{ flex: 1, padding: 12 }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "transparent" },
              }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Image" component={ImageComponent} />
              <Stack.Screen name="Text" component={TextComponent} />
              <Stack.Screen name="Message" component={Message} />
              <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </NativeBaseProvider>
    );
  }
}

/*
 * Used to generate a random string for the sync key.
 */
const generateString = () => {
  return Math.random().toString(36).substring(2);
};
