import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import Search from './Components/search.js'; 
import Navigation from './Navigation/Navigation.js';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Salut mon pote!</Text>
    //   <Text>Mande ve izy ao e!</Text>
    //   <StatusBar style="auto"/>
    // </View>
    //<Search />
    //<Navigation />
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
