import {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/ImageBackground.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          ></TextInput>
          <View style={styles.input}>
            <TextInput placeholder="Пароль"></TextInput>
            <Text style={styles.showingPas}>Показати</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>Увійти</Text>
            {/* <Button
              title="Увійти"
              color="#FF6C00"              
              onPress={() => Alert.alert("WORK")}
            /> */}
          </View>
          <View style={styles.supportContainer}>
            <Text style={styles.supportText}>Немає акаунту?</Text>
            <Text style={styles.supportText}>Зареєструватися</Text>
          </View>
          {/* <View style={styles.decorLine}></View> */}
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

  button: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },

  decorLine: {
    position: "absolute",
    top: "50%",
    left: "40",
    width: 135,
    borderTopWidth: 5,
    borderRadius: 100,
    borderColor: "#212121",
  },
});

export default LoginScreen;
