import React from "react";
import { Text, StyleSheet } from "react-native";

const Comments = () => {
  return <Text style={styles.container}>Comments Screen</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Comments;
