import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';
import email from './Login.js';

const Home = () => {
  return (
    <View>
      <Bar loggedInUser="Paul Amago"/>
      <Text>Email: {email} </Text>
      <Icons />
    </View>
  );
};

export default Home;