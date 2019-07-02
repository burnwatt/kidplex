import { RECEIVE_GENRE, RECEIVE_GENRES } from '../actions/genre_actions';
import { merge } from 'lodash';

const genreReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GENRE:
            return merge({}, state, { [action.genre.id]: action.genre });
        case RECEIVE_GENRES:
            return action.genres;
        default:
            return state;
    }
}

export default genreReducer;