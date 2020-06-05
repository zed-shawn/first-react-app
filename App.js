import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText]= useState('Open up App.js to start working on your app!');

  const toggle = () =>{
    setOutputText('button has been pressed');
  }
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title='Change text' onPress={() => toggle()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cfcf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
