import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { useState } from "react";
import axios from "axios";
import { Main_button } from "./buttons/Main_button";
import { login, logout, loginFailed } from "../actions/loginAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const { createHash } = require("crypto");

function hash(data) {
  return createHash("sha256").update(data).digest("hex");
}

export const Login_screen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isStudent, setIsStudent] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordText, setPasswordText] = useState("");
  let allowed = useSelector((state) => state.loginReducer).allowed;

  const validate = () => {
    let data = useSelector((state) => state.loginReducer);
    let type = data.user.Type;
    if (type === "student" && isLoggedIn == false) {
      setIsLoggedIn(true);
      setIsStudent(true);
    }

    if (type === "instructor" && isLoggedIn == false) {
      setIsLoggedIn(true);
      setIsInstructor(true);
    }
    if (type === "admin" && isLoggedIn == false) {
      setIsLoggedIn(true);
      setIsAdmin(true);
    }
  };

  // const onPress = () => {
  //   dispatch(login(userName, password));
  //   setUserName("");
  //   setPassword("");
  // };
  // validate();

  const onPress = () => {
    dispatch(login(userName, password));
    setUserName("");
    setPassword("");
    setPasswordText("");
  };
  validate();

  return (
    <View style={styles.container}>
      <Text style={styles.topheading}>Login Account</Text>

      <Image
        style={{ height: 180, width: 180, marginTop: 50, marginBottom: 40 }}
        source={require("./assets/LOGO.png")}
      />

      <Text style={styles.id_text}>User ID</Text>

      <TextInput
        onChangeText={(text) => {
          setUserName(text);
        }}
        value={userName}
        style={styles.userid}
        placeholder="Enter User ID"
      />

      <Text style={styles.password_text}>Password</Text>

      <TextInput
        onChangeText={(text) => {
          setPassword(hash(text));
          setPasswordText(text);
        }}
        value={passwordText}
        style={styles.userpassword}
        secureTextEntry={true}
        placeholder="Enter Password"
      />
      {allowed && isLoggedIn && isStudent
        ? navigation.navigate("student")
        : null}
      {allowed && isLoggedIn && isInstructor
        ? navigation.navigate("instructor")
        : null}
      {allowed && isLoggedIn && isAdmin ? navigation.navigate("admin") : null}

      <Main_button
        text="Log in"
        onPress={onPress}
        horizontal_padding={127}
        margintop={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  topheading: {
    marginTop: 50,
    marginRight: 200,
    fontSize: 20,
    fontWeight: "bold",
  },

  id_text: {
    marginTop: 20,
    marginRight: 226,
    fontSize: 18,
    fontFamily: "sans-serif-thin",
  },

  userid: {
    height: 40,
    width: 300,
    marginTop: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  password_text: {
    marginTop: 7,
    marginRight: 200,
    fontSize: 18,
    fontFamily: "sans-serif-thin",
  },

  userpassword: {
    height: 40,
    width: 300,
    marginTop: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
