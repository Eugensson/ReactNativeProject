import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";

const CreatePost = () => {
  const [postName, setPostName] = useState("");
  const [location, setLocation] = useState("");
  const [isPostNameFocused, setPostNameFocused] = useState(false);
  const [isLocationFocused, setLocationFocused] = useState(false);
  const navigation = useNavigation();

  const onCreatePost = (e) => {
    e.preventDefault();
    Alert.alert(`Логіка створення поста`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.photoWrapper}>
        <View style={styles.iconWrapper}>
          <Ionicons name="camera" size={24} color="black" />
        </View>
      </View>
      <Text style={styles.text}>Завантажте фото</Text>
      <TextInput
        style={styles.input}
        placeholder="Назва..."
        value={postName}
        onChangeText={setPostName}
        onFocus={() => setPostNameFocused(true)}
        onBlur={() => setPostNameFocused(false)}
      />
      <View style={styles.inputWrapper}>
        <TextInput
          style={{
            position: "relative",
            height: 50,
            paddingTop: 16,
            paddingBottom: 16,
            marginBottom: 32,
            borderBottomWidth: 1,
            borderBottomColor: "#bdbdbd",
            paddingLeft: 28,
          }}
          placeholder="Місцевість..."
          value={location}
          onChangeText={setLocation}
          onFocus={() => setLocationFocused(true)}
          onBlur={() => setLocationFocused(false)}
        />
        <Feather
          name="map-pin"
          size={24}
          color="#bdbdbd"
          style={{ position: "absolute", top: "12%", left: 0 }}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.btnWrapper,
          postName && location && { backgroundColor: "#ff6c00" },
        ]}
        onPress={() => navigation.navigate("Posts", onCreatePost)}
      >
        <Text
          style={[styles.btnText, postName && location && { color: "#fff" }]}
        >
          Опублікувати
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
  },

  photoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    marginTop: 32,
    marginBottom: 8,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
  },

  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
  },

  text: {
    marginBottom: 32,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#bdbdbd",
    textAlign: "left",
  },

  input: {
    position: "relative",
    height: 50,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#bdbdbd",
  },

  inputWrapper: {
    position: "relative",
  },

  btnWrapper: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: 50,
    borderRadius: 100,
    backgroundColor: "#f6f6f6",
  },

  btnText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#bdbdbd",
  },
});

export default CreatePost;
