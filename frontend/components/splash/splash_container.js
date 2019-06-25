import {connect} from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state) => {
    return {
        user: state.entities.users[state.session.id] 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Splash);