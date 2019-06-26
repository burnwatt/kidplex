import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Head from './head';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id]
    }
};


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

const HeadContainer = connect(mapStateToProps, mapDispatchToProps)(Head);
export default HeadContainer;