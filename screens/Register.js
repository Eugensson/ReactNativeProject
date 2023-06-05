import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Ionicons, EvilIcons } from "@expo/vector-icons";

import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Registration = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFocused, setLoginFocused] = useState(false);
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
          <View style={styles.contentWrapper}>
            <View style={styles.photoPlaceholder}>
              <View style={{ position: "absolute", bottom: 10, right: -12 }}>
                <Ionicons name="add-circle-outline" size={25} color="#ff6c00" />
                {/* <EvilIcons
                  name="close-o"
                  size={24}
                  color="#bdbdbd"
                  backgroundColor="#fff"
                /> */}
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
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            <View style={styles.passwordWrapper}>
              <TextInput
                style={[styles.input, isPasswordFocused && styles.inputFocused]}
                secureTextEntry={!isPasswordShow}
                placeholder="Пароль"
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
                  screen: "Post",
                })
              }
            >
              <Text style={styles.btnText}>Зареєструватися</Text>
            </TouchableOpacity>
            <View style={styles.supportWrapper}>
              <Text style={styles.supportText}>Вже є акаунт?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.supportText}>Увійти</Text>
              </TouchableOpacity>
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

  contentWrapper: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "68%",
    paddingLeft: 16,
    paddingRight: 16,
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

  title: {
    marginTop: 92,
    marginBottom: 32,
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
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
  },

  inputFocused: { borderColor: "#ff6c00" },

  passwordWrapper: {
    position: "relative",
    width: "100%",
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

  showingPas: {
    position: "absolute",
    bottom: "50%",
    right: 16,
  },
});

export default Registration;
