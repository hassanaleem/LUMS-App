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
  Pressable,
  Touchable,
  TouchableOpacity,
} from "react-native";

import { Main_button } from "../buttons/Main_button";
import { logout } from "../../actions/loginAction";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Student_home_screen = ({ navigation }) => {
  const [loggedOut, setLoggedOut] = useState(false);
  let name = useSelector((state) => state.loginReducer).user.Name;

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: 30,
          backgroundColor: "#79c4f2",
          marginLeft: 250,
          marginTop: 40,
          marginRight: 15,
        }}
        onPress={() => {
          dispatch(logout());
          Alert.alert("Logout Successful");
          setLoggedOut(true);
        }}
      >
        {loggedOut ? navigation.navigate("Home") : null}

        <Text style={styles.logout_text}>Log out</Text>
      </TouchableOpacity>

      <Text style={styles.topheading1}>Welcome</Text>

      <Text style={styles.topheading2}>{name}</Text>

      <Main_button
        text="View Deadlines"
        onPress=""
        horizontal_padding={62}
        margintop={30}
      />
      <Main_button
        text="Academic Progress"
        onPress=""
        horizontal_padding={42}
        margintop={15}
      />
      <Main_button
        text="Discussion Forum"
        onPress=""
        horizontal_padding={49}
        margintop={15}
      />
      <Main_button
        text="GPA Calculator"
        onPress={() => navigation.navigate("GpaCalculator")}
        horizontal_padding={62}
        margintop={15}
      />
      <Main_button
        text="View Events"
        onPress=""
        horizontal_padding={77}
        margintop={15}
      />
      <Main_button
        text="All Resturents Menu"
        onPress=""
        horizontal_padding={39}
        margintop={15}
      />
      <Main_button
        text="Enroll Course"
        onPress=""
        horizontal_padding={71}
        margintop={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  topheading1: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },

  topheading2: {
    marginTop: 0,
    fontSize: 30,
    fontWeight: "bold",
  },

  logout_text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
