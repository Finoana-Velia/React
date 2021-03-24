const API_TOKEN = "e5e02fe1e307da79c73cbcb7160e7a4c";
//const ImgURL = "https://image.tmdb.org/t/p/w500/";

export function getFilmsFromApiWithSearchedText(text){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=e5e02fe1e307da79c73cbcb7160e7a4c&language=fr&query=' + text
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))    
}

//https://image.tmdb.org/t/p/w500/

export function getImage(name){
    return 'https://image.tmdb.org/t/p/w500'+name;
}

export function getFilm(id){
    const url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_TOKEN
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error));
}

