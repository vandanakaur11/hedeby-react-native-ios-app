import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { useEffect, useState } from "react";
import HomeScreen from "../screens/appScreens/HomeScreen";
import NoNotification from "../screens/appScreens/NoNotification";
import NoMessageScreen from "../screens/appScreens/NoMessageScreen";
import NotificationStack from "./NotificationStack";
import MessageStack from "./MessageStack";
import ProfileScreen from "../screens/appScreens/ProfileScreen";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable } from "react-native";
import TransactionScreen from "../screens/appScreens/TransactionScreen";
import SettingScreen from "../screens/appScreens/SettingScreen";
import WalletScreen from "../screens/appScreens/WalletScreen";
import CreateWallet from "../screens/appScreens/CreateWallet";

const win = Dimensions.get("window");

function BottomStack({ navigation }) {
  const themeColor = "blue";
  const [screenToShow, setScreenToShow] = useState("homescreen");

  return (
    <>
      <View style={{ backgroundColor: "#001437", height: win.height }}>
        {screenToShow === "createwallet" && <CreateWallet />}
        {screenToShow === "homescreen" && (
          <HomeScreen setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "nonotification" && <NoNotification />}
        {screenToShow === "nomessagescreen" && <NoMessageScreen />}
        {screenToShow === "profilescreen" && (
          <ProfileScreen setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "transactionscreen" && <TransactionScreen />}
        {screenToShow === "walletscreen" && <WalletScreen />}
        {screenToShow === "settingscreen" && (
          <SettingScreen setScreenToShow={setScreenToShow} />
        )}
      </View>

      <View
        style={{
          width: win.width,
          height: win.width / 5.5,
          position: "absolute",
          bottom: 0,
        }}
      >
        <LinearGradient
          colors={[
            "rgba(14, 46, 64, 1)",
            "rgba(14, 46, 64, 1)",
            "rgba(0, 20, 55, 1)",
          ]}
          style={styles.background}
        >
          <View style={styles.bottomWrap}>
            <Pressable onPress={() => setScreenToShow("homescreen")}>
              <Ionicons
                name="ios-bar-chart-outline"
                size={win.width / 16}
                color="#5CE5D5"
              />
            </Pressable>
            <Pressable onPress={() => setScreenToShow("nonotification")}>
              <Ionicons
                name="notifications"
                size={win.width / 16}
                color="#5CE5D5"
              />
            </Pressable>
            <Pressable onPress={() => setScreenToShow("nomessagescreen")}>
              <FontAwesome
                name="send-o"
                size={win.width / 16}
                color="#5CE5D5"
              />
            </Pressable>
            <Pressable onPress={() => setScreenToShow("profilescreen")}>
              <FontAwesome
                name="user-o"
                size={win.width / 16}
                color="#5CE5D5"
              />
            </Pressable>
          </View>
        </LinearGradient>
      </View>
    </>
    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarStyle: { backgroundColor: "#181818" },
    //   }}
    // >
    //   <Tab.Screen
    //     options={{
    //       headerStyle: {
    //         backgroundColor: "#FFF",
    //       },

    //       tabBarIcon: ({ focused, color, size }) => (
    //         <Ionicons
    //           name="ios-bar-chart-outline"
    //           size={win.width / 17}
    //           color={focused ? "#5CE5D5" : "#FFF"}
    //         />
    //       ),
    //       tabBarLabel: ({ focused, color, size }) => (
    //         <Text
    //           style={{
    //             color: focused ? "#5CE5D5" : color,
    //             fontSize: win.width / 42,
    //             paddingBottom: win.height / 200,
    //           }}
    //         >
    //           Home
    //         </Text>
    //       ),
    //     }}
    //     name="homestack"
    //     component={HomeStack}
    //   />
    //   <Tab.Screen
    //     options={{
    //       headerStyle: {
    //         backgroundColor: "#FFF",
    //       },

    //       tabBarIcon: ({ focused, color, size }) => (
    //         <Ionicons
    //           name="notifications"
    //           size={win.width / 17}
    //           color={focused ? "#5CE5D5" : "#FFF"}
    //         />
    //       ),
    //       tabBarLabel: ({ focused, color, size }) => (
    //         <Text
    //           style={{
    //             color: focused ? "#5CE5D5" : color,
    //             fontSize: win.width / 42,
    //             paddingBottom: win.height / 200,
    //           }}
    //         >
    //           Notification
    //         </Text>
    //       ),
    //     }}
    //     name="notificationstack"
    //     component={NotificationStack}
    //   />

    //   <Tab.Screen
    //     options={{
    //       headerStyle: {
    //         backgroundColor: "#FFF",
    //       },

    //       tabBarIcon: ({ focused, color, size }) => (
    //         <FontAwesome
    //           name="send-o"
    //           size={win.width / 17}
    //           color={focused ? "#5CE5D5" : "#FFF"}
    //         />
    //       ),
    //       tabBarLabel: ({ focused, color, size }) => (
    //         <Text
    //           style={{
    //             color: focused ? "#5CE5D5" : color,
    //             fontSize: win.width / 42,
    //             paddingBottom: win.height / 200,
    //           }}
    //         >
    //           Message
    //         </Text>
    //       ),
    //     }}
    //     name="messagestack"
    //     component={MessageStack}
    //   />
    //   <Tab.Screen
    //     options={{
    //       headerStyle: {
    //         backgroundColor: "#FFF",
    //       },

    //       tabBarIcon: ({ focused, color, size }) => (
    //         <FontAwesome
    //           name="user-o"
    //           size={win.width / 17}
    //           color={focused ? "#5CE5D5" : "#FFF"}
    //         />
    //       ),
    //       tabBarLabel: ({ focused, color, size }) => (
    //         <Text
    //           style={{
    //             color: focused ? "#5CE5D5" : color,
    //             fontSize: win.width / 42,
    //             paddingBottom: win.height / 200,
    //           }}
    //         >
    //           Profile
    //         </Text>
    //       ),
    //     }}
    //     name="profilestack"
    //     component={ProfileStack}
    //   />
    // </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomWrap: {
    width: win.width,
    height: win.width / 5.5,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default BottomStack;
