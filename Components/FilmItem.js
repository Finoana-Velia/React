import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import {getImage} from '../API/TMDBApi.js';

class FilmItem extends React.Component{
    
    render(){
        //console.log(this.props);
        const film = this.props.film;
        const detailFilm = this.props.detailFilm;
        
        return (
            <TouchableOpacity 
                onPress={() => detailFilm(film.id)}
                style = {styles.main_conteiner}>
                <View global style={styles.global_view_style}>
                    <View style={styles.img_style}>
                        <Image
                            style={styles.img_style}
                            source = {{ uri : getImage(film.poster_path)}}
                        />
                    </View>
                    <View Content style={styles.Content_style}>
                        <View Header style={styles.header_style}>
                            <View style={cont.title_style}><Text>{film.title}</Text></View>
                            <View style={cont.vote_style}><Text>vote : {film.vote_average} </Text></View>
                        </View>
                        <View Description style={styles.desc_style} numbreOfLines = {6}><Text>{film.overview}</Text></View>
                        <View Date style={styles.date_style}><Text>Date de Creation : {film.release_date}</Text></View>
                    </View>
                </View>
            </TouchableOpacity>
        )

        
    }
}

const cont = StyleSheet.create({
    title_style : {
        flex : 2,
        flexDirection : 'column'
    },

    vote_style : {
        flex : 1,
        flexDirection : 'column'

    }

});

const styles = StyleSheet.create ({
    main_conteiner : {
        height : 190,
        marginTop : 10,
    },

    text_style:
    {

    },
    
    global_view_style : {
        flex : 1,
        flexDirection : 'row',
    },

    img_style : {
        flex : 2,
        flexDirection : 'column',
        
    },

    Content_style : {
        flex : 5,
        flexDirection : 'column'

    },

    header_style : {
        flex : 1,
        flexDirection : 'row'
    },

    desc_style : {
        flex : 2,
        flexDirection : 'row'
    },
    
    date_style : {
        flex : 1,
        flexDirection : 'row', 
    }

});

export default FilmItem;