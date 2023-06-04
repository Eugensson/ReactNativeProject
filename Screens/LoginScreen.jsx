import { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  // Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

const LoginScreen = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShow, setShowPassword] = useState(false);
  const [isMailFocused, setMailFocused] = useState(false);
  const [isPassFocused, setPassFocused] = useState(false);

  const onLogin = () => {
    Alert.alert("Log In", `${mail} + ${password}`);
    console.debug("Log In", `${mail} + ${password}`);
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
          <View style={styles.loginContainer}>
            <Text style={styles.title}>Увійти</Text>
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
                placeholder="Пароль"
                secureTextEntry={!isPasswordShow}
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

            <TouchableOpacity style={styles.buttonContainer} onPress={onLogin}>
              <Text style={styles.button}>Увійти</Text>
            </TouchableOpacity>
            {/* <Button title="Увійти" style={styles.loginBtn} onPress={onLogin} /> */}
            <View style={styles.supportContainer}>
              <Text style={styles.supportText}>Немає акаунту?</Text>
              <Text style={styles.supportText}>Зареєструватися</Text>
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

  loginContainer: {
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

  title: {
    marginTop: 32,
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

  supportText: {
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

  // loginBtn: {
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
});

export default LoginScreen;
