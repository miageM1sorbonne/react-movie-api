export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCH_LIST":
            return {
                ...state,
                watchList: [action.payload, ...state.watchList],
            };
        case "REMOVE_MOVIE_FROM_WATCH_LIST":
            return {
                ...state,
                watchList: state.watchList.filter(movie => movie.id !== action.payload)
            }
        default:
            return state;
    }
};
