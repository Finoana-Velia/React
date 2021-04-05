const initialState = { favoritesFilm : [] } //<= initialState

//REDUCER
function toggleFavorite(state = initialState,action){
    let nextState;

    switch(action.type){
        case 'TOGGLE_FAVORITE':
            const favoriteIndex =  state.favoritesFilm.findIndex(item => item.id === action.value.id)
            if(favoriteIndex !== -1){
                //supression
                nextState = {
                    ...state,
                    favoritesFilm : state.favoritesFilm.filter( (item,index) => index !== favoriteIndex)
                }
            }
            else {
                nextState = {
                    ...state,
                    favoritesFilm : [...state.favoritesFilm,action.value]
                }
            } 
            return nextState || state;

        
        default :
        return state
    }
}

export default toggleFavorite;