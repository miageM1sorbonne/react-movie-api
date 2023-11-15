import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
    watchList : localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    //watched: [],
};

//create context
export const WatchListContext = createContext(initialState);

//provider components
export const WatchListProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect( () => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
    }, [state])

    //actions
    const addMovieToWatchList = movie => {
        dispatch({type: "ADD_MOVIE_TO_WATCH_LIST", payload: movie});
    };

    const removeMovieFromWatchList = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCH_LIST", payload: id});
    };

    

    return(
        <WatchListContext.Provider value={{watchList: state.watchList, addMovieToWatchList, removeMovieFromWatchList}}
        >
            {props.children}
        </WatchListContext.Provider>
    )
}