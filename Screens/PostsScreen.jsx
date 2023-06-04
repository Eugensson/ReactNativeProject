import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const PostsScreen = () => {
  const onAddPost = () => {
    Alert.alert("WORK");
  };

  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Text style={styles.postTitle}>Публікації</Text>
        <View style={styles.logOutWrapper}>
          <Feather name="log-out" size={24} color="bdbdbd" />
        </View>
      </View>
      <View style={styles.postMain}>
        <View style={styles.posts}>
          <Image
            style={styles.userImage}
            source={require("../assets/Avatar.jpg")}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userMail}>email@example.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.postFooter}>
        <SimpleLineIcons name="grid" size={24} color="#212121" />

        <TouchableOpacity style={styles.buttonContainer} onPress={onAddPost}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
        {/* <Button title="+" color="#ff6c00" onPress={onAddPost} /> */}
        <Feather name="user" size={24} color="#212121" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  postHeader: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
    width: "100%",
    height: 88,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },

  postTitle: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    textAlign: "center",
    color: "#212121",
  },

  logOutWrapper: {
    position: "absolute",
    right: 16,
    bottom: 10,
  },

  postMain: {
    width: "100%",
    height: "65%",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },

  posts: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "100%",
    height: 60,
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },

  userInfo: {},

  userName: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },

  userMail: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,

    color: "rgba(33, 33, 33, 0.8)",
  },

  postFooter: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 31,
    width: "100%",
    height: 83,
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 9,
    paddingBottom: 7,
    borderTopWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },

  button: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
});

export default PostsScreen;
