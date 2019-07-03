import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getVideo} from '../../actions/video_actions';
import Watch from './watch';

const mapStateToProps = (state, ownProps) => {
    return ({
        video: state.entities.videos[ownProps.match.params.id]
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        getVideo: id => dispatch(getVideo(id)),
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
