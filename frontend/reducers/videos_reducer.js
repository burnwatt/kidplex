import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';
import { merge } from 'lodash';

const videoReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            return merge({}, state, { [action.video.id]: action.video });
        case RECEIVE_VIDEOS:
            return action.videos;
        default:
            return state;
    }
}

export default videoReducer;