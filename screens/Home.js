import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import Profile from "./Profile";

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = "grid-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "CreatePost") {
            iconName = "add-outline";
            return (
              <View style={styles.iconWrapper}>
                <Ionicons name={iconName} size={size} color="#fff" />
              </View>
            );
          } else if (route.name === "Profile") {
            iconName = "user";
            return <Feather name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ff6c00",
        inactiveTintColor: "#212121",
        showLabel: false,
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Публікації",
          headerStatusBarHeight: 44,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#bdbdbd"
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate("Login")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          title: "Створити публікацію",
          headerStatusBarHeight: 44,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="#bdbdbd"
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("Posts")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          headerStatusBarHeight: 44,
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#bdbdbd"
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate("Login")}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6c00",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
});

export default Home;
