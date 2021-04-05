import React from 'react';
import { StyleSheet, Text } from 'react-native';
import FilmList from './FilmList.js';
import { connect } from 'react-redux';

class FavoriteScreen extends React.Component{
    render(){
        return (
            <FilmList
                films = {this.props.favoritesFilm}
                navigation = {this.props.navigation}
                favoriteList = {true}
            />
        );
    }
}

const styles = StyleSheet.create({});

const mapState = state => {
    return {favoritesFilm : state.favoritesFilm};
}

export default connect(mapState)(FavoriteScreen);