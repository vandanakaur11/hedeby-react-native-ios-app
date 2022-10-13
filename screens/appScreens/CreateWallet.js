import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import logo from "../../assets/images/smallLogo.png";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";

const win = Dimensions.get("window");

function CreateWallet({ screenToShow }) {
  const [inpValue, setInpValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Image source={logo} style={{ marginLeft: win.width / 25 }} />
        <Text style={styles.heading}>Wallet</Text>
      </View>
      <View style={styles.WrapContainer}>
        <Text style={styles.headText}>Create Wallet</Text>
        <View>
          <TextInput
            placeholder="Wallet Name"
            style={styles.inputWrap}
            value={inpValue}
            onChange={setInpValue}
          />
        </View>
        <View style={styles.buttons}>
          <Text
            style={{
              borderWidth: 1,
              width: win.width / 2.4,
              height: win.height / 12,
              borderColor: "#00000026",
              textAlign: "center",
            }}
          >
            Cancel
          </Text>
          <Text style={inpValue === "" ? styles.btnCreat : styles.btnCreat2}>
            Create
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    // height: win.height,
    width: win.width,
    flex: 1,
    // alignItems:""
  },
  wrap: {
    flexDirection: "row",
    marginTop: win.height / 40,
    height: win.width / 4.5,
    alignItems: "center",

    borderBottomWidth: 1,
    borderColor: "#FBFCFA40",
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 3,
  },
  WrapContainer: {
    backgroundColor: "white",
    height: win.height / 2.6,
    // alignItems: "center",
    // justifyContent: "space-evenly",
    width: win.width / 1.2,
    marginLeft: win.width / 12,
    marginTop: win.height / 5,
    borderRadius: 25,
  },
  headText: {
    fontSize: win.width / 20,
    textAlign: "center",
    color: "#7898FB",
    marginTop: win.height / 15,
  },
  inputWrap: {
    marginTop: win.height / 15,
    borderWidth: 1,
    borderColor: "#7898FB",
    // width: win.width / 1.4,
    marginHorizontal: win.width / 20,
    paddingVertical: win.height / 50,
    paddingHorizontal: win.height / 60,
    borderRadius: 15,
  },
  buttons: {
    flexDirection: "row",
    marginTop: win.height / 15,
  },
  btnCreat: {
    borderWidth: 1,
    width: win.width / 2.4,
    height: win.height / 12,
    borderColor: "#00000026",
    textAlign: "center",
    color: "#7898FB6B",
  },
  btnCreat2: {
    borderWidth: 1,
    width: win.width / 2.4,
    height: win.height / 12,
    borderColor: "#00000026",
    textAlign: "center",
    color: "#7898FB",
  },
});
export default CreateWallet;
