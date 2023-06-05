import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  ImageBackground,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isPasswordShow, setShowPassword] = useState(false);
  const navigation = useNavigation();

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
          <View style={styles.loginWrapper}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            <View
              style={[styles.input, isPasswordFocused && styles.inputFocused]}
            >
              <TextInput
                placeholder="Пароль"
                secureTextEntry={!isPasswordShow}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
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
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() =>
                navigation.navigate("Home", {
                  screen: "Posts",
                })
              }
            >
              <Text style={styles.btnText}>Увійти</Text>
            </TouchableOpacity>
            <View style={styles.supportWrapper}>
              <Text style={styles.supportText}>Немає акаунту?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.supportText}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    // <View style={styles.container}>
    //

    //
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    // padding: 16,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  loginWrapper: {
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

  primaryBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 16 - 32,
    height: 50,
    backgroundColor: "#ff6c00",
    borderRadius: 100,
  },
  btnText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  supportWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    // marginTop: 16,
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

export default Login;
