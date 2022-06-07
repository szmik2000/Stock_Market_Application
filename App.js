import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet, Text, View } from 'react-native';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "BusinessSearch",
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator);