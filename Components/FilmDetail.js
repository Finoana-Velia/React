import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View , Image ,Text, ActivityIndicator, ScrollView } from 'react-native';
import {getFilm,getImage} from '../API/TMDBApi.js';

class FilmDetail extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            film:undefined,
            isLoading : true
        }
    }

    componentDidMount(){
        getFilm(this.props.route.params.idFilm).then(data => this.setState({
            film : data,
            isLoading : false
        }));
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
                            <View style={{flex:3,flexDirection:'row'}}></View>
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

export default FilmDetail;