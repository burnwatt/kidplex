import * as APIUtil from '../util/genre_api_util';

export const RECEIVE_GENRE = 'RECEIVE_GENRE';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';

const receiveGenre = genre => ({
    type: RECEIVE_GENRE,
    genre
});
const receiveGenres = genres => ({
    type: RECEIVE_GENRES,
    genres
});

export const getGenre = genreId => dispatch => {
    return APIUtil.getGenre(genreId).then(genre => dispatch(receiveGenre(genre)));
}
export const getGenres = () => dispatch => {
    return APIUtil.getGenres().then(genres => dispatch(receiveGenres(genres)));
}