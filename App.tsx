import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { theme } from "./src/theme/index";
import Widget from "./src/components/Widget/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Widget />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}