import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
                        name = 'detail'
                        component = {FilmDetail}
                        option = {{ title : 'Recherche'}}
                    />
                </Stack.Navigator>
            //</NavigationContainer>
        );
    }
}



export default Navigation;
