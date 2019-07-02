import {connect} from 'react-redux';
import Genre from './genre';
import {getVideos} from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return({
        genre: ownProps.genre,
        videos: Object.values(ownProps.videos).filter(vid => ownProps.genre.videoIds.includes(vid.id))
    });
}

const mapDispatchToProps = dispatch => {
    return({
        getVideos: () => dispatch(getVideos()),
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(Genre);