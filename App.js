import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './Screens/WelcomeScreen'
import ScheduledClasses from './Screens/ScheduledClasses'

export default class App extends Component() {
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    )
  }
  
}

const SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:{
    screen:WelcomeScreen
  },
  Home:{
    screen:ScheduledClasses
  }
})

const AppContainer=createAppContainer(SwitchNavigator)

