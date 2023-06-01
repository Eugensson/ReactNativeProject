import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";

// import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/ImageBackground.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.registrationContainer}>
          <View style={styles.photoPlaceholder}>
            <Image
              style={styles.userImage}
              source={require("../assets/Avatar.jpg")}
            />
            <View style={{ position: "absolute", bottom: 10, right: -12 }}>
              {/* <Ionicons name="add-circle-outline" size={25} color="#ff6c00" /> */}
              <EvilIcons
                name="close-o"
                size={24}
                color="#bdbdbd"
                backgroundColor="#fff"
              />
            </View>
          </View>

          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          ></TextInput>
          <View style={styles.input}>
            <TextInput placeholder="Пароль"></TextInput>
            <Text style={styles.showingPas}>Показати</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>Зареєстуватися</Text>
            {/* <Button
              title="Зареєстуватися"
              color="#FF6C00"
              onPress={() => Alert.alert("WORK")}
            /> */}
          </View>
          <View style={styles.supportContainer}>
            <Text style={styles.supportText}>Вже є акаунт?</Text>
            <Text style={styles.supportText}>Увійти</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  registrationContainer: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "68%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 7,
    paddingBottom: 7,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  photoPlaceholder: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [
      { translateX: -Dimensions.get("window").width * 0.15 },
      { translateY: -Dimensions.get("window").width * 0.15 },
    ],
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },

  svg: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },

  userImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },

  addBtnImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "#FF6C00",
  },

  title: {
    marginTop: 84,
    marginBottom: 33,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.16,
    color: "#212121",
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    border: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },

  supportContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 16,
  },

  showingPas: {
    position: "absolute",
    bottom: 15,
    right: 16,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.16,
    textAlign: "center",
    color: "#1B4371",
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    width: "100%",
    height: 50,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },

  button: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },

  supportText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.16,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
