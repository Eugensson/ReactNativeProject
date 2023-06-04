import { useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  // Button,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

// import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShow, setShowPassword] = useState(false);
  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isMailFocused, setMailFocused] = useState(false);
  const [isPassFocused, setPassFocused] = useState(false);

  const onSingUp = () => {
    Alert.alert("Sing Up", `${login} + ${mail} + ${password}`);
    console.debug("Sing Up", `${login} + ${mail} + ${password}`);
    setLogin("");
    setMail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
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
            <TextInput
              style={[styles.input, isLoginFocused && styles.inputFocused]}
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
              onFocus={() => setLoginFocused(true)}
              onBlur={() => setLoginFocused(false)}
            />
            <TextInput
              style={[styles.input, isMailFocused && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
              value={mail}
              onChangeText={setMail}
              onFocus={() => setMailFocused(true)}
              onBlur={() => setMailFocused(false)}
            />
            <View style={[styles.input, isPassFocused && styles.inputFocused]}>
              <TextInput
                secureTextEntry={!isPasswordShow}
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPassFocused(true)}
                onBlur={() => setPassFocused(false)}
              />
              <TouchableOpacity
                style={styles.showingPas}
                onPress={() => setShowPassword(!isPasswordShow)}
              >
                <View>
                  {isPasswordShow ? (
                    <Text style={styles.supportText}>Сховати</Text>
                  ) : (
                    <Text style={styles.supportText}>Показати</Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={onSingUp}>
              <Text style={styles.button}>Зареєстуватися</Text>
            </TouchableOpacity>
            {/* <Button title="Зареєстуватися" style={styles.registrBtn} onPress={onLogin} /> */}
            <View style={styles.supportContainer}>
              <Text style={styles.supportText}>Вже є акаунт?</Text>
              <Text style={styles.supportText}>Увійти</Text>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    position: "relative",
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },

  inputFocused: { borderColor: "#ff6c00" },

  supportContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 16,
  },

  showingPas: {
    position: "absolute",
    bottom: "80%",
    right: 16,
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

  // registrBtn: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 43,
  //   width: "100%",
  //   height: 50,
  //   borderRadius: 100,
  //   backgroundColor: "#FF6C00",
  // },

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
