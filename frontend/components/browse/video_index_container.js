import { connect } from 'react-redux';
import VideoIndex from './video_index';
import {getVideos} from '../../actions/video_actions';
import { getGenres } from '../../actions/genre_actions';

const mapStateToProps = state => {
    return ({
        videos: Object.values(state.entities.videos),
        genres: Object.values(state.entities.genres),
    });
}

const mapDispatchToProps = dispatch => {

    return ({
        getVideos: () => dispatch(getVideos()),
        getGenres: () => dispatch(getGenres())
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoIndex);