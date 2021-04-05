import { createStore } from 'redux';
import toggleFavorite from './Reducer/Favorite.js';

export default createStore(toggleFavorite);