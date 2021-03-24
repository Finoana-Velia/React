import React from 'react';
import {StyleSheet,View,Button,TextInput,FlatList,Text, ActivityIndicator} from 'react-native';
import films from '../Helpers/FilmsData';
import FilmItem from './FilmItem.js';
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi';

class Search extends React.Component{
    
    texte_de_recherche = "";

    constructor(props){
        super(props);
        this.state = { 
            films : [],
            isLoading : false
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

    _detailFilm = (idFilm) =>{
       this.props.navigation.navigate("detail",{ idFilm : idFilm });
       
    }
    _searchTextInputChanged(text){
        this.texte_de_recherche = text
    }
                                                    
    _loadFilms(){
        this.setState({ isLoading : true })
        if(this.texte_de_recherche.length > 0){
           getFilmsFromApiWithSearchedText(this.texte_de_recherche).then(data => this.setState({ 
                films : data.results, 
                isLoading : false
            }));
        }  
    }

    render() {
        return (
            <View style={styles.mainStyle }>
                <TextInput  style={styles.textinputStyles} 
                            onChangeText={(text)=> this._searchTextInputChanged(text)} 
                            onSubmitEditing={()=> this._loadFilms()}
                            placeholder="Search" /> 
                <Button style={{ height:50 }}title="Rechercher" onPress={()=> this._loadFilms()}/>
                <FlatList 
                    data = {this.state.films}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=><FilmItem 
                        film={item}
                        detailFilm={this._detailFilm}
                        />}
                />
                {this._displayLoading()}
            </View>
        )   
    }
} 


const styles = StyleSheet.create({
    mainStyle :{
        flex:1
    },
    textinputStyles :{
        marginLeft:5,
        marginRight:5,
        height:50,
        borderColor:'black',
        borderWidth:1,
        paddingLeft:5
    },

    loading_style : {
        position : 'absolute',
        left : 0,
        right:0,
        top : 100,
        bottom: 0,
        alignItems : 'center',
        justifyContent:'center'
    }
});

export default Search;