import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigaion/bottom-tabs';
import Search from '../Components/search.js';
import FilmDetail from '../Components/FilmDetail.js';


const Stack = createStackNavigator();

class Navigation extends React.Component{
    render(){
        return (
            //<NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name = 'Search'
                        component = {Search}
                        option = {{ title : 'Recherche'}}
                    />
                    <Stack.Screen 
                        name = 'Detail'
                        component = {FilmDetail}
                        option = {{ title : 'Recherche'}}
                    />
                    <Stack.Screen
                        name = 'Favorites'
                        component = {FilmDetail}
                    />
                </Stack.Navigator>
            //</NavigationContainer>
        );
    }
}



export default Navigation;
