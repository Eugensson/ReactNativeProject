import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreens from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";
import Home from "./Screens/Home.jsx";

// import Login from "./screens/Login";
// import Register from "./screens/Register";
// import Home from "./screens/Home";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

const MainStack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <View style={styles.container}>
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreens}
          />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />

          {/* <View style={styles.container}>
          <RegistrationScreens />
          <LoginScreen />
          <StatusBar style="auto" />
        </View> */}
          <StatusBar style="auto" />
        </View>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
