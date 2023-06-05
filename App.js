import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";

const MainStack = createStackNavigator();

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={Register}
          options={{
            headerStatusBarHeight: -60,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            headerStatusBarHeight: -60,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerStatusBarHeight: -60,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
