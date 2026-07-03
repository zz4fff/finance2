import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { ScreenStack } from "react-native-screens";

import { Session } from "@supabase/supabase-js";

import Auth from "./src/components/Auth";
import { supabase } from "./src/services/supabase";

import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <ScreenStack>
          <Routes />
        </ScreenStack>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
