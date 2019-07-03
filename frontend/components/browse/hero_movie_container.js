import { connect } from 'react-redux';
import HeroMovie from './hero_movie';
import { getVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        videos: Object.values(ownProps.videos)
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        getVideos: () => dispatch(getVideos()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroMovie);