import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './Navigation/Navigation.js';
import { Provider } from 'react-redux';
import Store from './Store/Configure.js';
import Search from './Components/search.js';
import FavoriteScreen from './Components/FavoriteScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Salut mon pote!</Text>
    //   <Text>Mande ve izy ao e!</Text>
    //   <StatusBar style="auto"/>
    // </View>
    //<Search />
    //<Navigation />
    <Provider store={Store}>
    <NavigationContainer>
      {/* <Navigation /> */}
      <Tab.Navigator
        initialRouteName = 'Feed'
        tabBarOptions ={{
          activeTintColor : 'black',
          activeBackgroundColor : '#DDDDDD',
          inactiveBackgroundColor : '#FFFFFF' 
        }}
      >
        
        <Tab.Screen 
          name='Home' 
          component={Navigation}
          
          options = {{
            tabBarLabel : 'Home',
            tabBarIcon : () => {
              return (
                <Image 
                style = {styles.icon}
                source = {require('./Images/iconfinder_home_126572.png')}/>
              )
            }
          }}
          />
        
        <Tab.Screen 
          name='Favoites' 
          component={FavoriteScreen}
          options = {{
            tabBarLabel : 'Favorites',
            tabBarIcon : () => {
              return (
                <Image
                  style = {styles.icon}
                  source = {require('./Images/favoritesstar_79753.png')}
                />
              )
            }
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  icon : {
    width:30,
    height:30,
  }
});
