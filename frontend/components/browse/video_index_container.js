import { connect } from 'react-redux';
import VideoIndex from './video_index';
import {getVideos} from '../../actions/video_actions';

const mapStateToProps = state => {
    return ({
        videos: Object.values(state.entities.videos),
    });
}

const mapDispatchToProps = dispatch => {

    return ({
        getVideos: () => dispatch(getVideos())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoIndex);