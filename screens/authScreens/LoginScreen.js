import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import ship from "../../assets/images/whitelogo2.png";
import { LinearGradient } from "expo-linear-gradient";
import ToggleSwitch from "toggle-switch-react-native";
import google from "../../assets/images/google.png";
import fb from "../../assets/images/facebook.png";

const win = Dimensions.get("window");

function LoginScreen({ navigation }) {
  const [selectedButton, setSelectedButton] = useState("signin");
  console.log(selectedButton);
  // useEffect(() => {
  //     if (selectedButton === "register") {
  //         navigation.navigate("registerscreen")
  //     }
  // }, [selectedButton])
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7898FB", "#001437"]}
        style={styles.background}
      />
      <Image source={ship} style={styles.Logo} />
      <Text
        style={{ color: "white", fontSize: win.width / 12, marginBottom: 15 }}
      >
        Log in to continue
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.cardWrap}>
          <TextInput
            placeholder="Email or phone"
            placeholderTextColor="lightgray"
          />
        </View>
        <View style={styles.cardWrap}>
          <TextInput placeholder="Password" placeholderTextColor="lightgray" />
        </View>
        <View style={styles.row}>
          <ToggleSwitch
            isOn={true}
            onColor="#5CE5D5"
            offColor="grey"
            size="medium"
            onToggle={(isOn) => console.log("changed to : ", isOn)}
          />
          <Text
            style={{
              fontSize: win.width / 33,
              marginLeft: 8,
              color: "lightgray",
              marginTop: 3,
            }}
          >
            Remember me
          </Text>
          <Pressable onPress={() => navigation.navigate("forgotpassword")}>
            <Text
              style={{
                color: "#5CE5D5",
                fontSize: win.width / 33,
                marginLeft: 60,
              }}
            >
              Forgot Password?
            </Text>
          </Pressable>
        </View>
        <View style={styles.btnWrap}>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate("bottom-stack")}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: win.width / 20,
              }}
            >
              Log in
            </Text>
          </Pressable>
        </View>
        <Text
          style={{
            color: "lightgrey",
            textAlign: "center",
            fontSize: win.width / 30,
          }}
        >
          or continue with
        </Text>
        <View style={styles.socialImg}>
          <Image source={google} style={styles.socialImgIcon} />
          <Image source={fb} style={styles.socialImgIcon} />
        </View>
      </View>
      <View style={styles.Authbtn}>
        <Pressable
          onPress={() => setSelectedButton("signin")}
          style={
            styles.LoginBtn
            // selectedButton === "signin" ? styles.LoginBtn : styles.LoginBtn2
          }
        >
          <Text style={styles.btnText}>Sign in</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("registerscreen")}
          style={
            styles.RegisterBtn
            // selectedButton === "register"
            //     ? styles.RegisterBtn2
            //     : styles.RegisterBtn
          }
        >
          <Text style={styles.btnText2}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7898FB",
    height: "100%",
    width: win.width,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: win.height / 1.2,
  },
  Logo: {
    height: "10%",
    // color: "#fff",
    // fontSize: win.width / 16.5,
    // marginVertical: win.height / 90,

    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.32);",
    // borderWidth: 1,
    // height: win.height / 1.8,
    width: win.width / 1.2,
    borderRadius: 50,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  cardWrap: {
    width: "80%",
    marginLeft: 30,
    marginTop: win.height / 20,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#5CE5D5",
  },
  textWrap: {
    flexDirection: "row",
    marginVertical: win.width / 50,
    alignItems: "center",
    width: win.width / 1.5,
    // height: win.width / 6,
    borderWidth: "1px",
    marginLeft: "10%",
  },
  row: {
    // marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: win.width / 26,
    marginVertical: win.height / 45,
  },
  socialImg: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: win.height / 50,
  },
  swapScreen: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: win.width / 30,
  },
  Authbtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: win.width / 25,
  },
  LoginBtn: {
    backgroundColor: "#5CE5D5",
    color: "white",
    fontSize: win.width / 20,
    paddingVertical: win.width / 40,
    paddingHorizontal: win.width / 10,
    marginTop: win.height / 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
  },
  RegisterBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontSize: win.width / 20,
    paddingVertical: win.width / 40,
    paddingHorizontal: win.width / 10,
    marginTop: win.height / 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
  },
  RegisterBtn2: {
    backgroundColor: "#5CE5D5",
    color: "white",
    fontSize: win.width / 20,
    paddingVertical: win.width / 40,
    paddingHorizontal: win.width / 10,
    marginTop: win.height / 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
  },
  LoginBtn2: {
    backgroundColor: "rgba(255, 255, 255, 0.2);",
    color: "white",
    fontSize: win.width / 20,
    paddingVertical: win.width / 40,
    paddingHorizontal: win.width / 10,
    marginTop: win.height / 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
  },
  btnWrap: {
    alignItems: "center",
    marginVertical: win.height / 50,
  },
  btn: {
    backgroundColor: "#7898FB",

    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: win.width / 10,
    paddingVertical: win.width / 50,
    marginBottom: 10,
  },
  socialImgIcon: {
    marginHorizontal: win.width / 20,
  },
  btnText: {
    color: "white",
    fontSize: win.width / 25,
  },
  btnText2: {
    color: "lightgray",
    fontSize: win.width / 25,
  },
});
export default LoginScreen;
