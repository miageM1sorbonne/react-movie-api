/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCH_LIST":
            return {
                ...state, //créé une copie de l'objet state
                watchList: [action.payload, ...state.watchList], //on ajoute le film tout en préservant ceux déjà présents
            };
        case "REMOVE_MOVIE_FROM_WATCH_LIST":
            return {
                ...state,
                watchList: state.watchList.filter(movie => movie.id !== action.payload) //on exclue le film dont l'id correspond à action.payload
            }
        default:
            return state;
    }
};
