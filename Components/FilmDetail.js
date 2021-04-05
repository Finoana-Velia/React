import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View , Image ,Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import {getFilm,getImage} from '../API/TMDBApi.js';
import { connect } from 'react-redux';
 

class FilmDetail extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            film:undefined,
            isLoading : true
        }
    }

    componentDidMount(){
        const favoriteFilmIndex = this.props.favoritesFilm.findIndex(item => item.id === this.props.route.params.idFilm)
    if (favoriteFilmIndex !== -1) { 
      this.setState({
        film: this.props.favoritesFilm[favoriteFilmIndex],
        isLoading : false
      })
      return
    }
    
    this.setState({ isLoading: true })
    getFilm(this.props.route.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
    }
    
    componentDidUpdate(){
       console.log(this.props.favoritesFilm);
    }
    
    _toggleFavorite(){
        const action = {type : "TOGGLE_FAVORITE", value: this.state.film };
        this.props.dispatch(action);
    }
    
    _displayIconFavorite(){
        var sourceIcon = require('../Images/favoritesstar_79753.png');
        if(this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1){
            //favoris
            sourceIcon = require('../Images/symbole-d\'etoile-rempli-de-favoris.png');
        }
        return sourceIcon;
    }

    _displayFilm(){
        const film = this.state.film;
        if(film != undefined ){
            return (
                <ScrollView style = {styles.scroll_style}>
                    <View detail_general style={styles_detail.general_style}>
                        <View style={styles_detail.jacket}>
                        <Image
                            style={styles_detail.jacket}
                            source = {{ uri : getImage(film.poster_path)}}
                        />
                        </View>
                        <View container style={styles_detail.style_detail_general}>
                            <View title style={styles_detail.style_titre}>
                                <Text>{film.title}</Text>
                            </View>
                            <View vote style={styles_detail.style_vote}>
                                <Text>Vote :{film.vote_average}</Text>
                            </View>
                            <View date>
                                <Text>Date de creation: {film.release_date}</Text>
                            </View>
                            <View style={{flex:3,flexDirection:'row'}}>
                                <TouchableOpacity  
                                    onPress={()=> this._toggleFavorite()}
                                    style = {styles.favorite_container}>
                                    <Image
                                        style = {styles.icon_Style}
                                      source =  {this._displayIconFavorite()}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text>{film.overview}</Text>
                    </View>
                </ScrollView>
            );
        }
    }

    _displayLoading(){
        if(this.state.isLoading){
            return (
                <View style={styles.loading_style}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }
    render() {
        console.log(' -------- Film detail------------');
        //console.log(this.props);
        const idFilm = this.props.route.params.idFilm;
        //console.log(this.props);
        return(
            <View style={styles.main_container}>
                {this._displayFilm()}
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container : {
        flex : 1
    },
    loading_style : {
        position : 'absolute',
        left : 0,
        right:0,
        top : 0,
        bottom: 0,
        alignItems : 'center',
        justifyContent:'center'
    },

    scroll_style :{
        flex:1
    },

    Favorite_container : {
        alignItems : 'center',
       
    },
    
    icon_Style :
    {
        width : 45,
        height : 45
    }
})

const styles_detail = StyleSheet.create({
    general_style : {
        height :190,
        flexDirection : 'row'
    },
    jacket : {
        flex : 3,
        flexDirection: 'column',
    },

    style_detail_general :{
        flex:5,
        flexDirection : 'column',
    },

    style_titre :{
        flex:1,
        flexDirection:'row',        
    },

    style_vote : {
        flex:1,
        flexDirection : 'row'
    },

    style_date : {
        flex:1,
        flexDirection:'row'
    }

})

const mapStateToProps = (state) => {
    return {
        favoritesFilm : state.favoritesFilm
    };
}; 

export default connect(mapStateToProps)(FilmDetail);