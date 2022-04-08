import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';

import { Logout_button } from '../buttons/Logout_button';
import { Main_button } from '../buttons/Main_button';
import { useSelector } from 'react-redux';

const {width, height} = Dimensions.get("screen");

export const Instructor_home_screen = ({navigation}) => {
  let name = useSelector((state) => state.loginReducer).user.Name

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={{ width: '100%', height: '99%' }}>
          
        <Logout_button nav = {navigation}/>

        <Text style={styles.topheading1}>Welcome</Text>

        <Text style={styles.topheading2}>{name}</Text>

        <Main_button
          text="Add New Deadline"
          onpress=""
          horizontal_padding={0}
        margintop={height/7}
        marginleft={width/7}
        marginright={width/7}
        />

        <Main_button
          text="Edit Deadlines"
          onpress=""
          horizontal_padding={0}
        margintop={height/50}
        marginleft={width/7}
        marginright={width/7}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  topheading1: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  topheading2: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

