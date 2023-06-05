import React from "react";
import { Text, StyleSheet } from "react-native";

const Profile = () => {
  return <Text style={styles.container}>Profile Screen</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
