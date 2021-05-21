import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import ScanScreen from './screens/ScanScreen'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
      <ImageBackground source={'https://i.pinimg.com/originals/30/b8/17/30b8174c6f1a07e0af9bcf41fec3a5f5.gif'} style={{height: (Dimensions.get('window').height), width: (Dimensions.get('window').width)}}>
      <ScanScreen />
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
