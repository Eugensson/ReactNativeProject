import React from "react";
import { Text, StyleSheet } from "react-native";

const Posts = () => {
  return <Text style={styles.container}>Posts</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Posts;
