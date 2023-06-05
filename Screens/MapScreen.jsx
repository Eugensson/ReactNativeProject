import * as React from "react";
import { View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    textAlign: "center",
    color: "#212121",
  },
});

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MapScreen</Text>
    </View>
  );
};

export default MapScreen;
