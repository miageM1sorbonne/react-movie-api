import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    watchList : localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
};

//create context
export const WatchListContext = createContext(initialState);

//provider components
export const WatchListProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //useEffect used to updated localStorage
    useEffect( () => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
    }, [state])

    /** Actions
     * dispatch renvoi une action au reducer
     * type : quel cas traiter
     * propriétée de l'action payload utilisée pour transporter les données pertinentes (movie ou id)
     */
    const addMovieToWatchList = movie => {
        dispatch({type: "ADD_MOVIE_TO_WATCH_LIST", payload: movie}); 
    };

    const removeMovieFromWatchList = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCH_LIST", payload: id});
    };

    /**
     * Retourne le composant WatchListProvider qui englobe tout les composants enfants avec le context WatchListContext
     * value partage les données que l'on souhaite partager avec les composants enfants
     * props.children est une propriété de React qui représente les composants enfants rendus à l'intérieur de WatchListProvider
     */
    return(
        <WatchListContext.Provider value={{watchList: state.watchList, addMovieToWatchList, removeMovieFromWatchList}}
        >
            {props.children}
        </WatchListContext.Provider>
    )
}