import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getVideos } from '../../actions/video_actions'
import Nav from './nav';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        videos: state.entities.videos
    }
};


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        getVideos: () => dispatch(getVideos())
    }
};

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
export default NavContainer;